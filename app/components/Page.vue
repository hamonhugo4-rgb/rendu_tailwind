<template>
  <div class="min-h-0 flex-1 overflow-y-auto">
    <Header />
    <div
      class="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] items-stretch gap-3 p-3 md:gap-4 md:p-4"
    >
      <CreateCatalogCard />

      <CatalogCard>
        <template #title>Christmas 2024</template>
        <template #tags>
          <li>Sneakers</li>
          <li>boots</li>
        </template>
        <template #date>Created on 12.27.2024</template>
        <template #count>254 products</template>
      </CatalogCard>

      <CatalogCard>
        <template #title>A very big title for a catalog with many thing</template>
        <template #tags>
          <li>Sneakers</li>
          <li>boots</li>
          <li>Belt</li>
          <li>Socks</li>
          <li>+3</li>
        </template>
        <template #date>Created on 12.27.2024</template>
        <template #count>254 products</template>
      </CatalogCard>
    </div>
  </div>
</template>