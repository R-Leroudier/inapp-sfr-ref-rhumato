<template>
  <div>
    <h2 class="title">Indice de Lequesne</h2>
      <p class="details">(Genou)</p>

      <h4 class="categorie">Douleur ou gêne</h4>
        <p class="description">Nocturne</p>

          <input type="radio" class="btn-check" name="btnradio1" id="btnradio1" autocomplete="off">
          <label class="btn btn-outline-primary" for="btnradio1">0-Aucune.</label>

          <input type="radio" class="btn-check" name="btnradio1" id="btnradio2" autocomplete="off">
          <label class="btn btn-outline-primary" for="btnradio2">1 - Seulement aux mouvements et dans certaines postures.</label>

          <input type="radio" class="btn-check" name="btnradio1" id="btnradio3" autocomplete="off">
          <label class="btn btn-outline-primary" for="btnradio3">2 - Même immobile, sans bouger.</label>

        <p class="description">Dérouillage matinal</p>

            <input type="radio" class="btn-check" name="btnradio2" id="btnradio4" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio4">0 - Aucun ou inférieur à 1 minute.</label>

            <input type="radio" class="btn-check" name="btnradio2" id="btnradio5" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio5">1 - Entre une et 15 minutes.</label>

            <input type="radio" class="btn-check" name="btnradio2" id="btnradio6" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio6">2 - Plus d'un quart d'heure.</label>
          

          <p class="description">Rester debout ou piétiner sur place 1/2 heure augmente-t-il la douleur ?</p>

            <input type="radio" class="btn-check" name="btnradio3" id="btnradio7" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio7">0 - Non.</label>

            <input type="radio" class="btn-check" name="btnradio3" id="btnradio8" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio8">1 - Oui.</label>

          <p class="description">Douleur à la marche</p>

            <input type="radio" class="btn-check" name="btnradio4" id="btnradio9" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio9">0 - Non.</label>

            <input type="radio" class="btn-check" name="btnradio4" id="btnradio10" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio10">1 - Seulement après quelque distance.</label>

            <input type="radio" class="btn-check" name="btnradio4" id="btnradio10" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio10">	2 - Dès le début de la marche et de façon croissante.</label>

          <p class="description">Pouvez-vous vous relever d'un siège sans l'aide des bras ?</p>

            <input type="radio" class="btn-check" name="btnradio5" id="btnradio11" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio11">0 - Non.</label>

            <input type="radio" class="btn-check" name="btnradio5" id="btnradio11" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio11">1 - Oui.</label>

        <h4 class="categorie">Périmètre de marche</h4>

          <p class="description">Périmètre (quelle que soit la douleur)</p>

            <input type="radio" class="btn-check" name="btnradio6" id="btnradio12" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio12">0 - Illimité.</label>

            <input type="radio" class="btn-check" name="btnradio6" id="btnradio13" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio13">1 - Limité mais supérieur à 1 km.</label>

            <input type="radio" class="btn-check" name="btnradio6" id="btnradio14" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio14">2 - Environ 1 km (environ 15 minutes).</label>

            <input type="radio" class="btn-check" name="btnradio6" id="btnradio15" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio15">3 - 500 à 900 mètres (environ 8 à 15 minutes).</label>

            <input type="radio" class="btn-check" name="btnradio6" id="btnradio16" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio16">	4 - 300 à 500 mètres.</label>

            <input type="radio" class="btn-check" name="btnradio6" id="btnradio17" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio17">5 - 100 à 300 mètres.</label>

          <p class="description">Aides nécessaires</p>

            <input type="radio" class="btn-check" name="btnradio7" id="btnradio18" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio18">+0 - Aucune canne ou béquille nécessaire.</label>

            <input type="radio" class="btn-check" name="btnradio7" id="btnradio19" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio19">+1 - Une canne ou une béquille est nécessaire.</label>

            <input type="radio" class="btn-check" name="btnradio7" id="btnradio20" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio20">+2 - Deux cannes ou deux béquilles sont nécessaires.</label>

        <h4 class="categorie">Autres difficultés de la vie quotidienne</h4>

          <p class="description">Pouvez-vous monter un étage ?</p>

            <input type="radio" class="btn-check" name="btnradio8" id="btnradio21" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio21">0.0 - Sans difficulté.</label>

            <input type="radio" class="btn-check" name="btnradio8" id="btnradio22" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio22">0.5 - Assez facilement.</label>

            <input type="radio" class="btn-check" name="btnradio8" id="btnradio23" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio23">1.0 - Avec difficulté.</label>

            <input type="radio" class="btn-check" name="btnradio8" id="btnradio24" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio24">1.5 - Avec beaucoup de difficulté.</label>

            <input type="radio" class="btn-check" name="btnradio8" id="btnradio25" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio25">	2.0 - Impossible.</label>

          <p class="description">Pouvez-vous descendre un étage ?</p>

            <input type="radio" class="btn-check" name="btnradio9" id="btnradio26" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio26">0.0 - Sans difficulté.</label>

            <input type="radio" class="btn-check" name="btnradio9" id="btnradio27" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio27">0.5 - Assez facilement.</label>

            <input type="radio" class="btn-check" name="btnradio9" id="btnradio28" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio28">1.0 - Avec difficulté.</label>

            <input type="radio" class="btn-check" name="btnradio9" id="btnradio29" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio29">1.5 - Avec beaucoup de difficulté.</label>

            <input type="radio" class="btn-check" name="btnradio9" id="btnradio30" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio30">	2.0 - Impossible.</label>

          <p class="description">Pouvez-vous vous accroupir ou rester à genoux ?</p>

            <input type="radio" class="btn-check" name="btnradio10" id="btnradio31" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio26">0.0 - Sans difficulté.</label>

            <input type="radio" class="btn-check" name="btnradio10" id="btnradio32" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio32">0.5 - Assez facilement.</label>

            <input type="radio" class="btn-check" name="btnradio10" id="btnradio33" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio33">1.0 - Avec difficulté.</label>

            <input type="radio" class="btn-check" name="btnradio10" id="btnradio34" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio34">1.5 - Avec beaucoup de difficulté.</label>

            <input type="radio" class="btn-check" name="btnradio10" id="btnradio35" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio35">	2.0 - Impossible.</label>

          <p class="description">Pouvez-vous marcher en terrain irrégulier ?</p>

            <input type="radio" class="btn-check" name="btnradio11" id="btnradio36" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio36">	0.0 - Sans difficulté.</label>

            <input type="radio" class="btn-check" name="btnradio11" id="btnradio37" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio37">0.5 - Assez facilement.</label>

            <input type="radio" class="btn-check" name="btnradio11" id="btnradio38" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio38">1.0 - Avec difficulté.</label>

            <input type="radio" class="btn-check" name="btnradio11" id="btnradio39" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio39">1.5 - Avec beaucoup de difficulté.</label>

            <input type="radio" class="btn-check" name="btnradio11" id="btnradio40" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio40">	2.0 - Impossible.</label><br><br>

          <button type="button" class="btn validate"> calculer</button>

            <span class="input-group-text" id="basic-addon1">Indice :</span>
            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">

          <p class="details">Interprétation:</p>
          <p class="details">Indice:</p>
          <p class="details">- 0-4 : Handicap modeste ou pas de handicap.</p>
          <p class="details">- 5-7 : Handicap moyen.</p>
          <p class="details">- 8-10 : Handicap important.</p>
          <p class="details">- 11-13 : Handicap très important.</p>
          <p class="details">- ≥ 14 : Handicap extrême, insupportable.</p>
          <p class="details">Un indice supérieur ou égal à 10 peut être une indication à une prothèse.</p>
          <p class="details">Références:</p>
          <p class="details">Lequesne M, Mery C, Samson M, Gérard P. Indexes of severity for osteoarthritis of the hip and knee. Scand J Rheumatol, 1987, 65 : 85-89.</p>
          
          
        
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
 
name:"KneeLequesnes",
 mounted()
    {}
})
</script>

<style></style>
