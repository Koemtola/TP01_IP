<script >
import categoryApi from "@/libs/apis/category";
import itemApi from "@/libs/apis/item";
import productApi from "@/libs/apis/product";
import priceApi from "@/libs/apis/price";

export default {
  data() {
    return {
      categories: [],
      items: [],
      products: [],
      title: "",
      imageUrl: "",
      desc: "",
      categoryId: "",
      itemId: "",
      priceModalShown: false,
      shownEditProductModal: false,
      selectedProduct: null,
      price: "",
      source: "",
    };
  },
  methods: {
    async onCreateProduct(e) {
      e.preventDefault();
      const { title, desc, itemId, categoryId, imageUrl } = this;
      const result = await productApi.create({
        title,
        desc,
        item: itemId,
        category: categoryId,
        imageUrl,
      });
      if (!result) {
        alert(result.error);
        return;
      }

      this.products = await productApi.all();
      this.title =
        this.desc =
        this.categoryId =
        this.itemId =
        this.imageUrl =
        "";
    },
    onSelectProduct(product) {
      this.priceModalShown = true;
      this.selectedProduct = product;
    },
    async onAddPrice(e) {
      e.preventDefault();
      const { price, source, selectedProduct } = this;
      const result = await priceApi.add({
        price,
        source,
        product: selectedProduct?._id,
      });

      console.log(result);
      if (result.error) {
        alert(result.error);
        return;
      }

      this.products = await productApi.all();
      this.price = this.source = this.selectedProduct = "";
    },
    async onDeleteProduct(product) {
      const result = await productApi.delete(product._id);
      if (result.error) {
        alert(result.error)
        return
      }
      this.products = await productApi.all();
      this.title =
        this.desc =
        this.categoryId =
        this.itemId =
        this.imageUrl =
        "";
    },

    async onUpdateProduct(e) {
      e.preventDefault();
      const result = await productApi.update(this.selectedProduct);
      if (result.success === false) {
        alert(result);
        return
      }
      this.products = await productApi.all();
      this.price = this.source = this.selectedProduct = "";
      shownEditProductModal = false
    }
  },
  async mounted() {
    this.categories = await categoryApi.all();
    this.items = await itemApi.all();
    this.products = await productApi.all();
  },
};
</script>
<template >
  <main class="relative">
    <div class="bg-gray-500 text-white py-2 text-lg text-center m-1">
      <h1>Products</h1>
    </div>
    <div class="py-2">
      <form @submit="onCreateProduct" method="post">
        <div class="flex flex-row py-2 px-2 space-x-1 bg-gray-100">
          <div>
            <input required v-model="title" type="text" placeholder="Title" />
          </div>
          <div>
            <label for="category">Choose a category:</label>
            <select required v-model="categoryId" name="category" class="px-2 mx-2 rounded-sm bg-green-100">
              <option v-for="category in categories" :key="category.name" :value="category._id">
                {{ category.name }}
              </option>
            </select>
          </div>
          <div>
            <label for="item">Choose an item:</label>
            <select required v-model="itemId" name="item" class="px-2 mx-2 rounded-sm bg-green-100">
              <option v-for="item in items" :key="item.name" :value="item._id">
                {{ item.name }}
              </option>
            </select>
          </div>
          <div>
            <input required v-model="imageUrl" type="text" placeholder="ImageURL" />
          </div>
          <div>
            <input required v-model="desc" type="text" placeholder="Description" />
          </div>
          <div>
            <button type="submit" class="bg-blue-500 text-white p-1 px-2 rounded-md">
              Add new
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="w-[calc(100vw - 8rem)]">
      <table id="customers">
        <tr class="bg-gray-200">
          <th class="max-w-[6rem]">Title</th>
          <th class="max-w-[10rem]">Prices</th>
          <th class="max-w-[6rem]">Category</th>
          <th class="max-w-[6rem]">Item</th>
          <th class="max-w-[20rem]">ImageURL</th>
          <th class="max-w-[20rem]">Description</th>
          <th class="max-w-[5rem]">Action</th>
        </tr>

        <tr v-for="product in products" :key="product.name">
          <td class="max-w-[6rem]">{{ product.title }}</td>
          <td class="max-w-[10rem]">
            <ul>
              <li v-for="price in product?.prices" :key="price._id">
                <span>{{ price.price }}$</span>
                <span>({{ price.source }})</span>
              </li>
            </ul>
          </td>
          <td class="max-w-[6rem]">{{ product.category?.name }}</td>
          <td class="max-w-[6rem]">{{ product.item?.name }}</td>
          <td class="max-w-[20rem]">{{ product.imageUrl }}</td>
          <td class="max-w-[20rem]">{{ product.desc }}</td>
          <td class="max-w-[5rem] flex flex-col gap-2 items-center">
            <div class="flex flex-col space-y-2">
              <div class="flex flex-col space-y-2">
                <button @click="() => { selectedProduct = { ...product }; shownEditProductModal = true }"
                  class="hover:text-green-600 hover:font-bold">Edit</button>
                <button @click="onDeleteProduct(product)" class="hover:text-red-600 hover:font-bold">
                  Delete
                </button>
                <button v-on:click="onSelectProduct(product)" class="hover:text-green-600 hover:font-bold">
                  Add price
                </button>
              </div>
            </div>

          </td>
        </tr>
      </table>
    </div>
    <div v-if="priceModalShown && selectedProduct">
      <teleport to="body">
        <div
          class="absolute w-full h-[100vh] overflow-hidden flex justify-center items-center edit-product-view top-0 left-0">
          <div class="w-72 absolute  h-96 bg-white rounded-lg shadow-md">
            <form @submit="onAddPrice" method="post">
              <div class="h-full w-full flex flex-col">
                <div class="flex flex-grow-0 relative p-2 py-3">
                  <div class="font-bold text-center w-full">
                    {{ selectedProduct?.title }}
                  </div>
                </div>
                <div class="w-full flex flex-grow p-2">
                  <div class="w-full flex flex-col space-y-3">
                    <div class="border">
                      <input required v-model="price" class="w-full h-10 px-1" type="number" placeholder="Price" />
                    </div>
                    <div class="border">
                      <input required v-model="source" class="w-full h-10 px-1" type="text" placeholder="Source" />
                    </div>
                  </div>
                </div>
                <div class="flex flex-grow-0 py-1 justify-center space-x-2">
                  <button v-on:click="priceModalShown = false" class="
                  p-2
                  px-3
                  text-gray-500
                  rounded-md
                  cursor-pointer
                  border border-gray-100
                ">
                    Cancel
                  </button>
                  <button type="submit" class="
                  bg-blue-500
                  p-2
                  px-3
                  text-white
                  rounded-md
                  cursor-pointer
                ">
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </teleport>
    </div>

    <div v-if="shownEditProductModal && selectedProduct">
      <teleport to="body">
        <div class="h-[100vh] w-screen flex justify-center fixed items-center top-0 edit-product-view ">
          <div class=" p-[2rem] top-[15vh] flex items-center justify-center bg-gray-500 border-2 border-white ">
            <form @submit="onUpdateProduct" method="post">
              <div class="flex flex-row py-2 px-2 space-x-1 bg-gray-100">
                <div>
                  <input required v-model="selectedProduct.title" type="text" placeholder="Title" />
                </div>
                <div>
                  <label for="category">Choose a category:</label>
                  <select required v-model="selectedProduct.category._id" name="category"
                    class="px-2 mx-2 rounded-sm bg-green-100">
                    <option v-for="category in categories" :key="category.name" :value="category._id">
                      {{ category.name }}
                    </option>
                  </select>
                </div>
                <div>
                  <label for="item">Choose an item:</label>
                  <select required v-model="selectedProduct.item._id" name="item"
                    class="px-2 mx-2 rounded-sm bg-green-100">
                    <option v-for="item in items" :key="item.name" :value="item._id"
                      :selected="item._id === selectedProduct.item._id">
                      {{ item.name }}
                    </option>
                  </select>
                </div>
                <div>
                  <input required v-model="selectedProduct.imageUrl" type="text" placeholder="ImageURL" />
                </div>
                <div>
                  <input required v-model="selectedProduct.desc" type="text" placeholder="Description" />
                </div>
              </div>
              <div class="pt-[2rem] w-full flex justify-evenly">
                <button type="submit" class="bg-blue-700 text-white p-1 px-4 rounded-md">
                  OK
                </button>
                <button type="button" class="bg-blue-500 text-white p-1 px-4 rounded-md"
                  @click="() => { selectedProduct = null; shownEditProductModal = false }">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </teleport>
    </div>
  </main>
</template>

<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
  overflow: auto;
}


#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

.edit-product-view {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>