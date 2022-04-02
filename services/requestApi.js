export default ( ) => ({
    
getRequestPrice:(distance) => {
        return new Promise((resolve, reject)=>{
            setTimeout(() =>{
                let json ={
                    error:''
                };

                 json.price = distance *7 + 100;

                resolve(json);
            }, 1000);
        });

    },

    findDriver:(options) => {
        return new Promise((resolve, reject)=>{
            setTimeout(() =>{
                let json ={
                    error:''
                };

                  json.error = 'Ops nenhum guincho por perto, ligue: 0800 000-000'

                resolve(json);
            }, 5000);
        });

    }

});

