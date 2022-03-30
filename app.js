const app= Vue.createApp({
data(){
    return {
        myName:"srini",
        myAge:27,
        myImage: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg",
        randomNum: Math.random(),
    }
},
methods:{


}
});

app.mount('#assignment');
const app=Vue.createApp({
    data() {
        return {
courseGoalA:'<h2>Finish the course and learn Vue</h2>',
courseGoalB:'<h1>Master the course and learn Vue</h1>',
supportLink:'https://support.gainsight.com/PX'
        };
    },
    methods:{
        outputGoal(){
           const randomNumber= Math.random();
           if(randomNumber<0.5){
               return this.courseGoalA; 
           } else{
               return this.courseGoalB;
           }
        }
    }
});

app.mount('#user-goal');

const app2=Vue.createApp({
data(){
    return {
        counter:0,
        myName:''
    }
},
methods:{
    addCounter(num){
        this.counter=this.counter+num;
    },
    reduceCounter(num){
        this.counter=this.counter-num;
    },
    setName(event,lastN){
        this.myName=event.target.value+" " + lastN;
    }
}
});
app2.mount('#events');

const app= Vue.createApp({
data(){
    return {
        myName:"srini",
        myAge:27,
        myImage: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg",
        randomNum: Math.random(),
    }
},
methods:{


}
});

app.mount('#assignment');