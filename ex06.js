//화살표 함수 this

const relationship1 ={
    name:"one",
    friends:["hi","hello","bye"],
    logFriends:function() {
        var that = this;    //relationship을 가리키는 this를 that에 저장
        this.friends.forEach(function(friends) {
            console.log(that.name, friends);
        });
    }
}
relationship1.logFriends();

console.log('-------------------------');

const relationship2 ={
    name:"one",
    friends:["hi","hello","bye"],
    logFriends() {
        this.friends.forEach((friends)=>{
            console.log(this.name, friends);
        });
    }
}
relationship2.logFriends();