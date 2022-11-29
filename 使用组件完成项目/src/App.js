

const App = () => {

    const clickHandler = (event) =>{
        event.preventDefault();// 取消默认行为
        event.stopPropagetion();// 取消事件的冒泡
         
        alert("我是app中的clickHandler");
        // 在React中，无法通过↓取消默认行为 
    //    return false;

        /* 
            事件对象
                - React事件中同样会传递事件对象，是经过React包装后的事件对象
                - React中的事件对线同样不是原生的事件对线，是经过React包装后的事件对象
                - 由于对象进行过包装，所以使用过程我们无需再去考虑兼容性问题
        */
    };

    return <div 
        onClick={()=>{
            alert("div");
        }}
        style={{width:200,height:200,margin:'100px auto',backgroundColor:'#bfa'}}>

        {/* 
            在React中，事件需要通过元素的属性来设置
                和原生JS不同，在React中事件的属性需要使用驼峰命名法：
                    onclick -> onClick
                    onchange -> onChange
                属性值不能直接执行代码，而是需要一个回调函数
                    onclick=“alert(123)”
                    onClick={()=>{alert(123)}}
        */}
        <button onClick={()=>{alert(123);}}>点我一下</button>
        <button onClick={clickHandler}>111</button>
        <br />
        <a href="#" onClick={clickHandler}>超链接</a>
    </div>
};

export default App;