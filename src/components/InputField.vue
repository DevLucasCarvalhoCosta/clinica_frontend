<!-- src/components/InputField.vue -->
<template>
    <div class="input-field">
      <label :for="name">{{ label }}</label>
      <input
        v-bind="$attrs"
        :id="name"
        :type="type"
        :name="name"
        v-model="modelValue"
        :required="required"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: String,
      type: {
        type: String,
        default: 'text',
      },
      name: String,
      modelValue: String,
      required: {
        type: Boolean,
        default: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .input-field {
    margin-bottom: 1rem;
  }
  
  input {
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.2rem;
  }
  </style>
  