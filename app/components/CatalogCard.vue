<template>
  <article
    class="flex min-h-48 flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
  >
    <header class="flex min-h-14 items-center justify-between gap-3">
      <h2 class="line-clamp-2 text-lg font-semibold leading-snug text-gray-900">
        <slot name="title" />
      </h2>
      <button
        type="button"
        aria-label="Catalog options"
        class="grid size-6 shrink-0 place-items-center rounded text-gray-400 hover:bg-gray-100"
      >
        <img src="/square-plus.png" alt="" class="size-4 brightness-0 invert md:size-5" />
      </button>
    </header>

    <ul
      class="flex flex-wrap gap-1.5 *:rounded *:border *:border-gray-300 *:bg-gray-50 *:px-2 *:py-0.5 *:text-xs *:text-gray-700"
    >
      <slot name="tags" />
    </ul>

    <footer class="mt-auto space-y-2 text-xs text-gray-400">
      <p><slot name="date" /></p>
      <p class="text-gray-900"><slot name="count" /></p>
    </footer>
  </article>
</template>
