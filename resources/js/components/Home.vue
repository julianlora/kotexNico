<template>
  <div>
    <div class="textoImg" data-aos="fade-right" data-aos-duration="2000">>
      <p>Fabricamos cintas elásticas para la industria en general</p>
      <button type="button"  class="btn masInformacion" >MÁS INFORMACIÓN</button>

    </div>

    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        
        <div class="carousel-item active">
          <img src="../../img/home.png" class="d-block w-100" alt="..." >
        </div>
        <div class="carousel-item">
          <img src="../../img/home.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../../img/home.png" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>


    <div class="secciones">
      <!-- <div class="seccion">
        <p class="titleSeccion">Novedades</p>
        <div class="novedades">
        <div class="card" style="width: 18rem;">
          <img src="../../img/5.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h4 class="card-top">PRODUCTOS</h4>
            <h5 class="card-title">Elásticos negros</h5>
            <p class="card-text">
Los elásticos negros continúan siendo una elección popular debido a su versatilidad y durabilidad, siendo ideales para una variedad de aplicaciones en la industria textil y más allá.</p>
            <p class="card-bot">Leer más</p>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <img src="../../img/2.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h4 class="card-top">PRODUCTOS</h4>
            <h5 class="card-title">Cordones elásticos</h5>
            <p class="card-text">Los cordones elásticos ofrecen flexibilidad y comodidad para una variedad de usos, desde calzado hasta aplicaciones industriales.</p>
            <p class="card-bot">Leer más</p>
          </div>
        </div>
  
        <div class="card" style="width: 18rem;">
          <img src="../../img/8.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h4 class="card-top">PRODUCTOS</h4>
            <h5 class="card-title">Elásticos partidos</h5>
            <p class="card-text">Los elásticos partidos ofrecen flexibilidad y comodidad para una variedad de aplicaciones.




</p>
            <p class="card-bot">Leer más</p>
  
          </div>
        </div>
        </div>
      </div> -->
      
    </div>
    <div class="seccion2">
      <div class="contenido">
        <p class="titleSeccion">Productos</p>
        <div class="imagenes">
          <div style="margin-right: 2.5%;" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
            <p class="tituloImg">PRODUCTOS DE LINEA</p>
            <div class="imagen-contenedor" >
              <img class="imgS zoomable" src="../../img/productos.png" alt="">
          </div>
          </div>
          <div  data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
            <p class="tituloImg">PRODUCTOS ESPECIALES</p>
            <div class="imagen-contenedor">
            <img class="imgS zoomable" src="../../img/productos2.png" alt="">
        </div>          
      </div>
        </div>
      </div>

    </div>

    <div class="empresa">
      <div class="imgEmpresa" data-aos="fade-right" data-aos-duration="2000"  >
        <img src="../../img/imgNosotros2.png" alt="">
      </div>
          <div class="infoEmpresa" >
          <p class="titulo" data-aos="fade-left" data-aos-duration="2000">Empresa</p>
          <div class="infotext" data-aos="fade-left" data-aos-duration="2000">
            <p class="text" ><b class="kotex">Kotex SRL</b>, fábrica de cintas elásticas y rígidas de crochet, es una empresa familiar con casi 30 años en el rubro textil.</p>
            <p class="text" style="margin-top: 50px;">Por la calidad de nuestros productos y especial enfoque en la “atención personalizada” ocupamos un lugar de preferencia entre las empresas confeccionistas de reconocidas marcas.</p>
          </div>
          <button type="button" class="btn masInformacion2" data-aos="fade-left" data-aos-duration="2000">MÁS INFORMACIÓN</button>

      </div>
    </div>

    <div class="nuestrosServicios" data-aos="fade-up" data-aos-duration="2500">
      <div>
        <p class="titleServicio">Nuestros servicios</p>
      </div>
      <div class="servicios">
        <div class="tarjeta" data-aos="flip-left" data-aos-duration="3000">
          <font-awesome-icon class="iconServicio" :icon="['fas', 'cubes']" />
          <p class="textTarjeta">Stock permanente en productos de linea</p>
        </div>
        <div class="tarjeta" data-aos="flip-left" data-aos-duration="3000">
          <font-awesome-icon class="iconServicio" :icon="['fas', 'gem']" />
          <p class="textTarjeta">Desarrollos de productos especiales</p>
        </div>
        <div class="tarjeta" data-aos="flip-left" data-aos-duration="3000">
          <font-awesome-icon class="iconServicio" :icon="['fas', 'truck']" />
          <p class="textTarjeta">Envíos al interior a través del transporte de su confianza</p>
        </div>
        <div class="tarjeta" data-aos="flip-left" data-aos-duration="3000">
          <font-awesome-icon class="iconServicio" :icon="['fas', 'headset']" />
          <p class="textTarjeta">Atendemos su consulta telefonicamente o por email</p>
        </div>
      </div>
    </div>

    <div class="productosDestacados" data-aos="fade-up" data-aos-duration="2500">
      <p class="productosD">Productos destacados</p>
      <div>
        <Carousel class="carouselP" :items-to-show="4" :wrap-around="true">
          <Slide v-for="producto in productos" :key="producto.id">
            <div class="carousel__item" data-aos="fade-up" data-aos-duration="2000">
              <div class="producto"> 
            <img :src="'../../img/' + producto.imagen"  alt="imagen">
            <p class="categoria">{{ producto.categoria }}</p>
            <p class="nombre">{{ producto.nombre }}</p>
          </div>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>

  </Carousel>

  
       
      </div>
    </div>

    
  


   
  </div>  

</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide, Pagination  } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import axios from 'axios';

export default defineComponent({
  name: 'Breakpoints',
  components: {
    Pagination,
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      productos: [],
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      breakpoints: {
        700: {
          itemsToShow: 3.5,
          snapAlign: 'center',
        },
        1024: {
          itemsToShow: 5,
          snapAlign: 'start',
        },
      },
    };
  },
  mounted() {

    AOS.init();

    axios.get('/api/productosdelinea')
      .then(response => {
        this.productos = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error al traer los productos:', error);
      });
  }
});

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');


.productosDestacados{
  height: 800px;
}
.carouselP{
  padding-left: 17.5%;
  width: 90%;
}

.nombre{
  font-size: 22px;
  color: black;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  line-height: 26px;
  margin-left: 10px;
  text-align: left;

}
.categoria{
  font-size: 14px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  color: #33447F;
  line-height: 17px;
  margin-top: 20px;
  margin-left: 10px;
  text-align: left;

}

.productos{
  height: 1200px;
  display: grid;
  grid-template-rows: repeat(2, 1fr 1fr);
  grid-template-columns: repeat(4, 400px);
}

.producto img{
  width: 288px;
  height: 300px;
}
.producto{
  padding: 20px;
  margin-top: 50px;
  width: 320px;
  height: 500px;
  background-color: white;
  color: #33447F;
  border-bottom: 1px solid rgba(147, 147, 147, 0.3);
}

.producto:hover{
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

}


.productosD{
  font-size: 35px;
  font-weight: 600;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  margin-left: 17%;
  padding-top: 70px;
}
.titleServicio{
  font-size: 35px;
  font-weight: 600;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  margin-left: 17%;
  padding-top: 50px;

}
.iconServicio{
  font-size: 40px;
  color: #2F3F78;
}
.textTarjeta{
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #2F3F78;
  margin-top: 50px;
}
.tarjeta{
  width: 288px;
  height: 266px;
  background-color: white;
  margin-left: 30px;
  text-align: center;
  border-radius: 5px;
  padding-top: 70px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

}
.servicios{
  display: flex;
  justify-content: left;
  margin-left: 15.5%;
}
.nuestrosServicios{
  background-color: #F5F5F5;
  height: 500px;
  width: 100%;
}

.kotex{
  font-weight: 600;
}
.text{
  font-size: 25px;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;

}

.infotext{
  margin-top: 50px;
  width: 700px;
}

.titulo{
  margin-top: 80px;
  font-size: 45px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500
}

.infoEmpresa{
  width: 50%;
  padding-left: 100px;
  background-color: #2F3F78;
  color: white;
}
.imgEmpresa img{
  width: 100%;
  filter: grayscale(100%); 
  height: 100%;

}
.imgEmpresa{
  width: 50%;
  height: 100%;
}
.empresa{
  display: flex;
  height: 750px;
}

.tituloImg{
  color: white;
  position: absolute;
  z-index: 1; 
  margin-top: 250px;
  margin-left: 100px;
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  font-weight: 500;
  line-height: 29.26px;
  text-align: center;

}
.secciones{
  display: flex;
  justify-content: center;
}
.seccion2{
   margin-left: 17%;
   margin-top: 80px;
}
.contenido{
  display: flex;
  flex-direction: column;
  
}
.imagenes div{
  width: 600px;
  height: 288px;
  margin-bottom: 100px;
  margin-top: 20px;
}
.imagenes{
  display: flex;
  justify-content: left;

}




.imagen-contenedor {
  overflow: hidden; 
  width: 200px; 
  height: 200px; 
  filter: brightness(0.8); 
}

.imgS {
  width: 100%; 
  transition: transform 0.3s ease; 
}

.imgS:hover {
  transform: scale(1.1); 
}

.titleSeccion{
  font-family: "Montserrat", sans-serif;
  font-size: 35px;
  font-weight: 600;
  line-height: 42.67px;
  text-align: left;
  margin-top: 20px;


}
.seccion{
  display: flex;
  flex-direction: column;
}
.card-bot{
  color: rgba(0, 0, 0, 0.57);
}
.card-title{
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  font-weight: 400;
  line-height: 30px;
  text-align: left;

}
.card-top{
  color: #33447F;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 19.5px;
  text-align: left;

}
.card img{
  width: 280px;
  height: 280px;
}
.card{
  width: 300px;
  height: 450px;
  margin-left: 20px;
  border-radius: 0px;
  border: none;
}
.novedades{
  padding-top: 50px;
  justify-content: left;
  display: flex;
  height: 700px;
  width: 100%;
}
.carousel-indicators .active {
    opacity: 1;
    height: 7px;
    width: 35px;
    background-color: #939393;

}

.carousel-indicators button {
    opacity: 1;
    height: 7px;
    width: 35px;
    background-color: #939393;
    opacity: 50%;

}
.carousel-indicators {
 right: 44.5%;
 margin-left: 0px;
 bottom: 65px;
 height: 10px;
}
.carousel-control-prev,
.carousel-control-next {
  display: none; 
}

.carousel-inner{
  height: 750px;
  gap: 0px;
  opacity: 0px;
}


.carousel-item img {
    background-size: cover;
    width: 100%;
    height: 100%;
}

.textoImg{
    margin-top: 150px;
    margin-left: 17%;
    width: 530px;
    height: 50px;
    position: absolute;
    z-index: 1; 

}
.textoImg p{
    color: white;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
    font-size: 40px;
}

.masInformacion{
  margin-left: 1%;
  margin-top: 50px;
  border-radius: 0%;
  width: 300px;
  height: 60px; 
  background-color: #2F3F78; 
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 20px;
}

.masInformacion2{
  margin-left: 4px;
  margin-top: 50px;
  border-radius: 0%;
  width: 300px;
  height: 60px; 
  background-color: white; 
  color: #2F3F78;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 20px;
}


</style>