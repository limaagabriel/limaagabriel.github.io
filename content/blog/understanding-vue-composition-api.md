---
title: "Understanding Vue's Composition API"
description: "A deep dive into Vue 3's Composition API and how it improves code organization and reusability."
date: "2024-02-01"
tags: ["vue", "javascript", "composition-api"]
---

# Understanding Vue's Composition API

Vue 3 introduced the Composition API, a new way to organize and reuse logic in Vue components. Let's explore why it was created and how to use it effectively.

## Why the Composition API?

The Options API (Vue 2 style) works great for small components, but as components grow, related logic gets scattered across different options:

```javascript
export default {
  data() {
    return {
      count: 0,
      name: ''
    }
  },
  methods: {
    increment() { this.count++ },
    updateName(val) { this.name = val }
  },
  computed: {
    doubled() { return this.count * 2 }
  }
}
```

The Composition API lets you group related logic together:

```javascript
<script setup>
// Counter logic
const count = ref(0)
const doubled = computed(() => count.value * 2)
const increment = () => count.value++

// Name logic
const name = ref('')
const updateName = (val) => name.value = val
</script>
```

## Reactive References

Use `ref` for reactive primitives:

```javascript
const count = ref(0)
console.log(count.value) // 0
count.value++
```

Use `reactive` for objects:

```javascript
const state = reactive({
  count: 0,
  name: 'John'
})
console.log(state.count) // 0
state.count++
```

## Computed Properties

Create derived state with `computed`:

```javascript
const count = ref(2)
const doubled = computed(() => count.value * 2)
console.log(doubled.value) // 4
```

## Watchers

React to changes with `watch`:

```javascript
const count = ref(0)

watch(count, (newValue, oldValue) => {
  console.log(`Count changed from ${oldValue} to ${newValue}`)
})
```

## Lifecycle Hooks

Use lifecycle hooks in setup:

```javascript
onMounted(() => {
  console.log('Component mounted')
})

onBeforeUnmount(() => {
  console.log('Cleaning up')
})
```

## Composables

Extract reusable logic into composables:

```javascript
// useCounter.js
export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = initialValue
  
  return { count, increment, decrement, reset }
}

// In component
const { count, increment } = useCounter(10)
```

## Script Setup

The `<script setup>` syntax is more concise:

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
const increment = () => count.value++
</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>
```

## When to Use Each API

**Use Composition API when:**
- Building complex components with lots of logic
- Extracting reusable logic
- Working with TypeScript (better type inference)
- Need better code organization

**Options API is still fine for:**
- Simple components
- Teams more comfortable with it
- Existing projects (no need to rewrite)

## Best Practices

1. **Group related logic**: Keep related reactive state and functions together
2. **Use composables**: Extract reusable logic into composables
3. **Avoid reactive overhead**: Not everything needs to be reactive
4. **Consistent naming**: Prefix composables with `use`
5. **Return only what's needed**: Don't expose internal implementation details

## Conclusion

The Composition API is a powerful tool that improves code organization and reusability in Vue applications. It doesn't replace the Options API but provides an alternative that works better for complex scenarios.

Take time to learn it, and you'll find it becomes natural. The ability to extract and reuse logic through composables is particularly valuable as your applications grow.
