<template>
    <div class="footer">
        <footer>
            <p>Developd By <span class="jac"></span> <a href="https://github.com/jerosoler/" target="_blank">Jero Soler</a></p>
        </footer>
        
    </div>
</template>
<style scoped>
.footer, footer {
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  align-content: center;
  z-index: 4;
}
p {
    height:40px;
    line-height: 40px;
    margin:0;
    display: inherit;
}
p a {
    font-weight: bold;
    color: var(--color);
}
.jac {
    display: inline-block;
    position:relative;
    top: 2px;
    width: 38px;
    height: 38px;
    margin-left: 7px;
    margin-right: 7px;
    background-image: url('/icons/JeroAndCoco.svg');
    background-repeat: no-repeat;
    background-size: 38px;
}
</style>