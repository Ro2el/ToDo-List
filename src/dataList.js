import React, { Component } from 'react'
import { map, get, filter } from 'lodash'
import { connect } from 'react-redux'
import { apply } from './apply'
import ListItem from './recursion2/ListItem'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import './flexLayout.css'

const recursionPlan = () => ({
  path: 'users.data',
  children: {
    path: 'tasks.data',
    key: "filtering",
    filterKey: 'user',
    children: {
      path: 'subtasks.data',
      key: "filtering",
      filterKey: 'task_select'
    }
  }
})


class DataList extends Component {

  render() {
    let plan = null
    if (!this.props.plan) {
      plan = recursionPlan()
    }
    else {
      plan = this.props.plan
    }
    const listItems = apply(plan)

    return (
      <div className="display">
        <ul>

          {map(listItems, item =>

            <ListItem key={item.id} item={item} plan={plan} />

          )
          }
        </ul>
      </div>
    )
  }}
  export default DataList
//   return(
//     <div className="expandHeader">
//       {this.props.clicked?
//         <div className="collapse">
//           <ExpandMoreIcon onClick={this.props.expand}/>
//           </div> 
//       :

//       <div className="expand">
//         <ExpandMoreIcon onClick={this.props.expand}/>
//       </div>}

//     <h3>{this.props.children}</h3>
//     <button className="edit">Edit</button>
//     </div>
//     )

// }
// }


  




 





{/* {map(this.props.tasks, (value, key) => {
                const filter = {
                    "key": "filtering",
                    "path": "subtasks.data",
                    "params": {
                        task_select: key,
                    }
                }
                const sublist = map(apply(filter), (value, key) => <li>{value.title}</li>)
                return (
                    <div>

                        <li>{value.title} {apply(rec(key))}</li>
                        <ul>{sublist}</ul>
                    </div>)
            })}

        </ul> */}
