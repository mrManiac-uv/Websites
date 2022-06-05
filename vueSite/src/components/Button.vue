<template>
  <div>
    <h1>{{text}}</h1>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "Button"
    },
    top: String,
    left: String
  }
}
</script>

<style scoped>
div {
  width: 10rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  position: absolute;
  top: 20rem;
  left: 64rem;
  transition: 200ms;
}
div:hover{
  background-color: black;
  color: #770DFF;
  border: 4px solid #770DFF;
}
h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>