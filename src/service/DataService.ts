import axios from 'axios';

class DataServiceClass {
  $data: any;

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      axios
        .get('./data.json')
        .then((response) => {
          this.$data = response.data;
          resolve(this.$data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  }

  loadCRI(): Promise<any> {
    return new Promise((resolve, reject) => {
      axios
        .get('./fichesCRI.json')
        .then((response) => {
          resolve(response.data);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  }

}

export default new DataServiceClass();
