<template lang="html">
    <section class="MOXIFLOXACINE">
      <h2>MOXIFLOXACINE</h2>

      <p>- DCI : MOXIFLOXACINE</p>
      <p><span class="bold">- Nom commercial</span> Tavanic®</p>

      <div>
        - Voie d’administration
        <ul>
          <li>Per os  400 mg</li>
        </ul>
      </div>

      <p class="bold">- Posologies</p>

      <p>- Arthrite septique documentée à Staphylococcus Aureus en bithérapie</p>
      <p>- Arthrite septique documentée à streptocoque en bithérapie</p>
      <p>- Arthrite septique documentée à Entérobactérie du groupe 1-2 sensible à l’acide nalidixique</p>
      <ul>
        <li><span class="bold">Per os :</span>  400 mg une fois par jour</li>
      </ul>

      <div>
        <span class="bold">- Contre-indications</span>
        <ul>
          Hypersensibilité aux fluroquinolones
          Grossesse et allaitement
          Trouble convulsif
          Antécédent de tendinopathie liées aux fluoquinolones
          Allongement du QT
          Prise concomitante d’un médicament favorisant les torsades de pointes (antiarythmiques, antidepresseurs imipraminique, neuroleptique)
          Hypokaliémie
          Insuffisance hépatique grave
        </ul>
      </div>

      <div>
        <span class="bold">- Précautions d’emploi</span>
        <ul>
          Prise concomitante d’un médicament prédisposant aux convulsions (téophylline, AINS)
          Prise concomitatnte d’antivitamine K
          Insuffisance rénale
        </ul>
      </div>

      <div>
        <span class="bold">- Effets indésirables</span>
        <ul>
          Toxidermie
          Photosensibilisation
          Neutropénie (en association avec la rifampicine)
          Risque d’allongement du QT et torsade de pointe
          Troubles digestifs
          Tendinopathies
        </ul>
      </div>

      <div>
        <span class="bold">- Surveillance</span>
        <ul>
          Surveillance de la fonction hépatique et rénale
          ECG initial et surveillance ECG
        </ul>
      </div>
    </section>
</template>

<script lang="js">
    export default {
        name: 'MOXIFLOXACINE',
        props: [],
        mounted() {},
        data() {
            return {};
        },
        methods: {},
        computed: {}
    }
</script>

<style scoped lang="scss">
    .MOXIFLOXACINE {
      padding: 0 15px;
      text-align: left;

      h2 {
        text-align: center;
      }

      .bold {
        font-weight: bold;
      }

      .underline {
        text-decoration: underline;
      }

      .footer {
        font-size: x-small;
        color: gray;
      }
    }
</style>
