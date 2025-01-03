<template>
  <q-page padding>
    <CartPreview
      :total-items="totalItems"
      :total-price="totalPrice"
      :is-collapsed="isCollapsed"
      class="q-ml-auto q-mb-md"
    />

    <h5 class="q-m-sm">{{ product.title }}</h5>
    <q-separator class="q-my-md" />

    <q-card bordered class="q-mb-md q-mx-auto overflow-hidden" style="max-width: 1600px">
      <div class="row items-stretch full-height" :class="{ 'col-reverse-md': $q.screen.md }">
        <div class="col-12 col-md-4">
          <q-img
            :src="product.image"
            :alt="product.name"
            fit="cover"
            spinner-color="primary"
            class="cursor-pointer full-width full-height"
            @click="openImageOverlay(product.image)"
          />
        </div>

        <div
          class="col-12 col-md-8 q-pa-md"
          style="
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            height: auto;
            min-height: 100%;
          "
        >
          <q-card-section style="flex: 1; display: flex; flex-direction: column; height: 100%">
            <!-- <div class="text-h6 product-name">{{ product.name }}</div> -->
            <div class="text-body1 q-mt-sm">{{ product.description }}</div>
          </q-card-section>

          <q-card-actions align="right" class="row justify-between items-center">
            <div class="q-mt-sm text-bold price-text">
              <template v-if="product.discount">
                <s class="text-grey">{{ formatPrice(product.price) }}</s>
                <span class="text-positive q-ml-sm">
                  {{ formatPrice(product.discountedPrice || product.price) }}
                </span>
              </template>
              <template v-else>
                {{ formatPrice(product.price) }}
              </template>
            </div>
            <q-btn
              :color="color"
              :text-color="text"
              label="Add to Cart"
              class="q-px-md"
              @click.stop="addToCart(product)"
            />
          </q-card-actions>
        </div>
      </div>
    </q-card>

    <div class="row justify-center q-mt-xl">
      <q-btn :color="color" :text-color="text" label="Back to Products" @click="goBack" />
    </div>

    <!-- Image Overlay -->
    <q-dialog v-model="showImageOverlay" maximized>
      <q-card class="q-pa-md" style="max-width: 90vw; max-height: 90vh; overflow: hidden">
        <div class="row justify-between items-center q-mb-md">
          <div class="text-h6">{{ product.name }}</div>
          <q-btn flat dense round icon="close" @click="showImageOverlay = false" />
        </div>
        <q-img
          :src="imageUrl"
          :alt="imageUrl"
          class="zoomable-image"
          :class="{ 'zoom-in': isZoomed, 'zoom-out': !isZoomed }"
          style="max-width: 100%; max-height: 100%"
          :style="imageStyle"
          @click="toggleZoom"
          @mousedown="startPanning"
          @mousemove="panImage"
          @mouseup="stopPanning"
          @mouseleave="stopPanning"
        />
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCartStore, type Product } from '@/stores/cart';
import { useQuasar } from 'quasar';
import type { QVueGlobals } from 'quasar/dist/types/globals';
import { scroll } from 'quasar';
import CartPreview from '@/components/CartPreview.vue';

const { getVerticalScrollPosition } = scroll;

const route = useRoute();
const router = useRouter();
const $q = useQuasar() as QVueGlobals;
const cartStore = useCartStore();

const product = ref<Product>({
  id: 0,
  title: '',
  name: '',
  price: 0,
  quantity: 0,
  description: '',
  category: '',
  image: '',
  rating: {
    rate: 0,
    count: 0,
  },
});

const color = computed(() => ($q.dark.isActive ? 'white' : 'black'));
const text = computed(() => ($q.dark.isActive ? 'black' : 'white'));

const totalItems = computed(() => cartStore.totalItems);
const totalPrice = computed(() => cartStore.totalPrice);

const isCollapsed = ref(false);
const showImageOverlay = ref(false);

const imageUrl = ref('');
const isZoomed = ref(false);
const isPanning = ref(false);
const startX = ref(0);
const startY = ref(0);
const translateX = ref(0);
const translateY = ref(0);

const formatPrice = (price: number): string => `$${price.toFixed(2)}`;

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const addToCart = (product: Product) => {
  cartStore.addItem({ ...product, quantity: 1 });
  scrollToTop();
  $q.notify({
    color: 'positive',
    message: 'Product added to cart!',
    icon: 'check_circle',
  });
};

const openImageOverlay = (image: string) => {
  imageUrl.value = image;
  showImageOverlay.value = true;
  isZoomed.value = false;
};

const toggleZoom = () => {
  if (!isZoomed.value) {
    translateX.value = 0;
    translateY.value = 0;
  }
  isZoomed.value = !isZoomed.value;
};

const startPanning = (event: MouseEvent) => {
  if (!isZoomed.value) return;
  isPanning.value = true;
  startX.value = event.clientX - translateX.value;
  startY.value = event.clientY - translateY.value;
};

const panImage = (event: MouseEvent) => {
  if (!isZoomed.value || !isPanning.value) return;
  translateX.value = event.clientX - startX.value;
  translateY.value = event.clientY - startY.value;
};

const stopPanning = () => {
  if (!isZoomed.value) return;
  isPanning.value = false;
};

const imageStyle = computed(() => ({
  '--translate-x': `${translateX.value}px`,
  '--translate-y': `${translateY.value}px`,
}));

const goBack = () => {
  router.push('/products');
};

const fetchProductDetails = async () => {
  const { slug } = route.params;
  $q.loading.show();
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${slug}`);
    const data = await response.json();
    product.value = {
      id: data.id,
      name: data.title,
      title: data.title,
      price: data.price,
      description: data.description,
      image: data.image,
      category: data.category,
      discount: Math.random() > 0.5,
      discountedPrice: data.price * (Math.random() > 0.5 ? 0.9 : 1),
      quantity: 0,
      rating: {
        rate: 0,
        count: 0,
      },
    };
  } catch {
    $q.notify({
      color: 'negative',
      message: 'Failed to fetch product details.',
      icon: 'error',
    });
  } finally {
    $q.loading.hide();
  }
};

const handleScroll = () => {
  const scrollTop = getVerticalScrollPosition(window);
  isCollapsed.value = scrollTop > 0;
};

onMounted(() => {
  fetchProductDetails();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss">
.zoomable-image {
  transition: transform 0.3s ease;
  &.zoom-in {
    cursor: grab;
    transform: scale(2) translate(var(--translate-x, 0), var(--translate-y, 0));
    transition: transform 0.3s ease;
    will-change: transform;
  }
  &.zoom-out {
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.3s ease;
  }
}
</style>
