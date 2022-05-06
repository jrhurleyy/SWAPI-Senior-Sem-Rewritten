import React from "react"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import HomePage from "./components/Homepage/HomePage"
import People from "./components/People/People"
// import Favorite from "./components/Favorites/ListFavorites"
// import DeleteFavorite from "./components/Favorites/DeleteFavorites"
// import AddFavorite from "./components/Favorites/AddFavorites"
import Navbar from "./components/Navbar"

function App() {
    return (
    <div className="App">
        <Navbar />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/people" component={People} />
            {/* <Route exact path="/favorites" component={Favorite} />
            <Route exact path="/deletefavorites" component={DeleteFavorite} />
            <Route exact path="/addfavorites" component={AddFavorite} /> */}
        </Switch>
    </div>
    );
}

export default App;