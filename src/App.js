import Aside from './components/Aside';
import Cards from './components/Cards'
import Head from './components/Head';
import Projects from './components/Projects';
import Statcard from './components/Statcard';
import Task from './components/Task'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './main.css'
import DetailedCard from './components/DetailedCard';
import DetailedCard2 from './components/DetailedCard2';
function App() {

  const cardData=[{
    logo:"fa fa-list-ul",
    text:"New Project"
  },
  {
    logo:"fa fa-usd",
    text:"New Invoice"
  },
  {
    logo:"fa fa-briefcase",
    text:"New Contract"
  }
  , {
    logo:"fa fa-product-hunt",
    text:"New Client"
  },
  {
    logo:"fa fa-comment",
    text:"New Proposal"
  }
]

const projData= [
  {
    text:"Lorem ipsum dolor sit amet consectetur.",
    roles:[{
      role:'frontend',
      color:'orange',
      bgcolor:'#2F261D'

    }
  ,
  {
    role:'Backend',
    color:'violet',
    bgcolor:'#2F261D'

  },
  
]
  },
  {
    text:"Lorem ipsum dolor sit amet consectetur.",
    roles:[{
      role:'frontend',
      color:'orange',
      bgcolor:'#2F261D'

    }]
  },
  {
    text:"Lorem ipsum dolor sit amet consectetur.",
    roles:[{
      role:'Backend',
      color:'violet',
      bgcolor:'#2F261D'

    }]
  },{
    text:"Lorem ipsum dolor sit amet consectetur.",
    roles:[{
      role:'frontend',
      color:'orange',
      bgcolor:'#2F261D'

    }]
  }
]
const taskData=[
  {
    text:"Lorem ipsum dolor sit amet consectetur.",
    roles:{
      role:'Frontend',
      color:'orange',
      bgcolor:'#F8E2FF'
    }
  },
  {
    text:"Lorem ipsum dolor sit amet consectetur.",
    roles:{
      role:'Frontend',
      color:'orange',
      bgcolor:'#F8E2FF'
    }
  },
  {
    text:"Lorem ipsum dolor sit amet consectetur.",
    roles:{
      role:'Backend',
      color:'violet',
      bgcolor:'#F8E2FF'
    }
  },
  {
    text:"Lorem ipsum dolor sit amet consectetur.",
    roles:{
      role:'Frontend',
      color:'orange',
      bgcolor:'#F8E2FF'
    }
  },{
    text:"Lorem ipsum dolor sit amet consectetur.",
    roles:{
      role:'Backend',
      color:'violet',
      bgcolor:'#F8E2FF'
    }
  }
  
]

const PortfolioCardData2 =[
 
  {
    title:"Sales Goals",
    logo:"fa fa-pie-chart",
    text:"$ 24.54"
  },
  {
    title:"Work Process",
    logo:"fa fa-user",
    text:"7 of 10"
  }
]

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
        <main className="container-fluid d-flex p-0">
      <Aside userName="Tyrone Lane" userMail="tyronelane@gmail.com"/>
      <div className="rightmain container px-5">
                    <Head text={"Good Morning,Tyrone"} >

              </Head>
              <div className="d-flex ml-3">
                {
                  cardData.map((card)=>(<Cards logo={card.logo} text={card.text}/>))
                }
              </div>


              <div className="d-flex justify-content-start container-fluid">
                    <div>
                      <p className="text-white px-2 m-0 py-0">Projects</p>
                    {
                      projData.map((proj)=>(<Projects text={proj.text} 
                        roles={proj.roles}/>))
                    }

                </div>
                
                <div >
                  <p className="text-white px-2 m-0 py-0">Todays Task</p>
                        {
                          taskData.map((data)=>(<Task text={data.text}
                             roles={data.roles}/>))
                        }   
                        </div>
              </div>
              <div>
  <Statcard/>
</div>
<div className="d-flex container">
  <DetailedCard title="Website (portfolio) Visit" logo='fa fa-user'/>
  {
    PortfolioCardData2.map(data=>(
      <DetailedCard2 title={data.title} logo={data.logo} text={data.text}/>
    ))
  }
      
       </div>
      </div>
       
    </main>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
