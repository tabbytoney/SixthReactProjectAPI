import React from 'react'

class SimpleList extends React.Component {

    catNamesList() {
        let cats = ["Kitty", "Jaden", "Scout"]
        return cats.map((cat, index) => {
            return <li key={index} >{cat}</li>
            //index has to be an argument when mapping through an array. Assigns 0, 1, 2 to the items of our array. It gives each item an individual key.
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.catNamesList()}

                </ul>
            </div>
        )
    }
}

export default SimpleList