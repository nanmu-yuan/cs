import {Formik,Field,Form,ErrorMessage} from 'formik'
import {useHistory, useLocation} from'react-router-dom'
import *as Yup from'yup'
import { useContext } from 'react'
import _get from 'lodash.get'
import {AuthDispatchContext,signIn} from'../context/Auth'
import { login } from '../api/product'
const AuthPage = ()=>{
    const initialValues = {
        username:'',
        password:''
    }
    const location = useLocation();
    const url = _get(location,'state')
    // 引入创建的AuthDispatchContext对象
    const AuthDispatch = useContext(AuthDispatchContext);
    const history = useHistory();

    const signInSuccess = async (userData)=>{

        login(userData).then(res=>{
            console.log(res)
              signIn(AuthDispatch,userData);
              history.push("/about")
        })
      
    }
    const schema =Yup.object().shape({
        username:Yup.string().max(10,'用户名的长度不能大于15').required('请输入用户名'),
        password:Yup.string().required('强输入密码')
    })      



    return(
        <Formik initialValues={initialValues} onSubmit=
        {async (values,{resetForm})=>{
            try{
                const userData = {
                    ...values
                }
                resetForm();
                signInSuccess(userData)
            } catch(error){
                console.log(error)
            }
        }} validationSchema={schema}>
            <Form>
                <div>
                    <Field name='username'></Field>
                    <ErrorMessage name='username'></ErrorMessage>
                </div>
                <div>
                    <Field name='password'></Field>
                    <ErrorMessage name='password'></ErrorMessage>
                </div>
                <div>
                    <button type='submit'>submit</button>
                </div>
            </Form>
        </Formik>
    )
}

export default AuthPage