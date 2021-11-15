
// var vm = new Vue({
//     옵션
// })

var data = { a: 1 }
var vm = new Vue({
    el: '#app1',
    data: data
})

// 인스턴스에 있는 속성은 원본 데이터에 있는 값을 반환
console.log(vm.a === data.a) // true

// 인스턴스에 있는 속성값을 변경하면  원본 데이터에도 영향
vm.a = 2
console.log(data.a) // 2

// ... 반대로 마찬가지입니다.
data.a = 3
console.log(vm.a)   // 3


vm.b = 'hi'
// b가 변경되어도 화면이 갱신되지  않는다.

// 어떤 속성이 나중에 필요하다는 것을 알고 있으며, 
// 빈 값이거나 존재하지 않은 상태로 시작한다면 아래와 같이 초기값을 지정
/*
    data: {
        newTodoText: '',
        visitCount: 0,
        hideCompletedTodos: false,
        todos: [],
        error: null
    }
*/


/* object.freeze() */
var obj = {
    foo: 'bar'
}
Object.freeze(obj)
new Vue({
    el: '#app2',
    data: obj
})