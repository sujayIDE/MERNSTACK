/*

!! #1. how to create the react project 
* create one folder open in vs code
* open the terminal => press ctrl + backtick button
todo : follow the given below steps ~ 
        >> npm create vite@latest 
        >> proceed with y 
        >> project name  
        >> framework => react 
        >> variant => javascript 
        >> Linter => ESlint 
        >>  install the dependencies with npm => yes 
        >> u will get URL => open that in browser & check the o/p  

!! #2. JSX : JavaScript XML
* it is a short way to write it down the HTML like code inside the JS or component return value.
* it is not 100%  HTML 

case : 01 [ actual way ]
    document.createElement("main", null,
    document.createElement("h1", null, "First React Project"),
    document.createElement("h2", null, " In todays class, we are going to learn components & JSX in react js")
  )

case : 02 [ short way - JSX ]
    <main>
      <h1> First React Project </h1>
      <h2>In todays class, we are going to learn components & JSX in react js </h2
    </main>


 * Rules of JSX * 
    >> 01. for & class attributes are not allowed in the JSX, u can use HTMLFor & className 
        ? examples : 
            <form>
                <label htmlFor="username">username</label>
                <input type="text" name="username" id="username"
                className="inputField" />
            </form>

    >> 02. each and every tag should be closed properly
            <input >   : error  - input has no corresponding closing tag. [ ❌ ] 
            <input />  : no errors - correct syntax [ ✅ ] 

    >> 03. In the JSX make sure, each and every tag should be wrapped or enclose inside the 1 single parent always.
            * JSX can return only 1 value 
            * JSX expressions must have one parent element
            * example : 
            !! u will get error : JSX expressions must have one parent element
            *    return (
                        <main></main>
                        <section></section>
                    * )
            !! no error = everything will work correct.
            *    return (
                        <main>
                                <section></section>
                        </main>
                    * )


    >> 04 : In JSX, only lowercase HTML tag names U can use
            * uppercase, pascal , camelcase , mix etc, are not allowed 
                ? HTML is case in-sensitive 
                ? JSX is case sensitive 

    >> 05 : if u want to use Component inside the JSX use the fixed syntax that is 
            * < ComponentName />  [ like a self closing HTML tag ]

    >> 06 : If u want to perform any logical stuff or use the variable value inside the JSX, u need use {} , inside that u can write it down your code. 
        * like - 
                    let username = "gagan"
                    return (
                                <main>
                                    <p> username is : {username}</p>

                                    {
                                        20 > 10 ? <p> yes </p> : <p> No </p>
                                    }
                                </main>
                            )



    !! #3. Components in React js 
            * We can create 2 types of components 
                    >>> class based    [ we not using it ]
                    >>> function based [ mostly used in react projects ] 

        ? what do u mean by components in react js 
        * it is just a file with extension .jsx that contains 1 function that function return the JSX code / UI.
         todo : example 
                        let componentName = ()=>{
                            return (
                                    <p> i am function based component</p>
                                )                
                        }

        ? how to create the components 
            1. create one file with extension .jsx like 
                >> ComponentName.jsx 

            2. component name should start with capital letter always 
                >> ComponentName.jsx

                >> Profile.jsx
                >> Contact.jsx 
                >> Home.jsx 
                >> About.jsx 
                >> Shop.jsx

            3. if u have long component name then use underscore [ _ ] or camelCasing or UpperCase with underscore
                    >> Home.jsx 
                    >> UserProfile.jsx 
                    >> User_Education_Details.jsx
                    >> User_01
                    >> User_02
                    >> User_03


        ?? how to use the component in another one - 
            1. export the component 
                    >> export default App

            2. import the component in the another one
                    >> import App from './App.jsx'

            3. then use the syntax - <ComponentName/>
                    >>   <App />

        !! it is a syntax - we can't change 
        * we need to use the syntax as it is. 

        todo : 
        import Home from "./components/Home"

        let App = ()=>{
                    return (
                            < Home />
                    )
            }


        !! task !! 
        inside the src folder 
        create one folder components 
            >> inside that create 5 components  with rafce
            >> & use all 5 components inside the App.jsx component


                                       !! Props !! 
* it is  A WAY to send the data form one component to another component in the form of object 
>> while using it - use the same name that we use while sending it 

?  one way data binding [ uni-directional flow of data ]
* data will move only in one direction that is parent to child 
 
 
? how to pass the data 
* by using the props 

todo : how to use the props 


props means sending the data from one component to another 
1. send the data 
2. receive the data 

1. how to send the data 
    >> as an attribute we need to pass the value 
       
    return (
        <main>
            <UserComponent  data={ userData } />
        </main>
        
    )


2. how to receive the data 
    >> inside the UserComponent as a parameter 

     let UserComponent = (  { data  }   )=>{
                    clg(data) // check the value 
            }



            */