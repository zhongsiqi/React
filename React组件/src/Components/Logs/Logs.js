import LogItem from './LogItem/LogItem';
import './Logs.css';

/* 日志的容器 */
const Logs = () => {
    return <div className='logs'>
        {/* 在父组件中可以直接在子组件中设置属性 */}
        {/* <LogItem test="456" hello="abc" fn={()=>{}}/> */}
        <LogItem date={new Date(2022,10,23,10,42)} desc={"学习前端"} time={"50"}/>
    </div>
};

export default Logs; 