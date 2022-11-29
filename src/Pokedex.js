import React, { Component } from "react";
import Pokecard from "./Pokecard";

class Pokedex extends Component {
  render() {
    return (
      <div className="Pokedex p-8">
        <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 mb-4 rounded-md shadow-sm">
          <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
            {/* Left Side */}
            <div className="ml-4 mt-2">
              <h2 className="text-lg font-medium leading-6 text-gray-900">Player {this.props.player}</h2>
              <p className="mt-1 text-sm text-gray-500">
                Total Expereince: {this.props.exp}
              </p>
            </div>
            {/* Right Side */}
            <div className="ml-4 mt-2 flex-shrink-0">
            <span className={this.props.isWinner ? 'inline-flex items-center rounded-full bg-green-100 px-8 py-2 text-sm font-medium text-green-800': 'inline-flex items-center rounded-full bg-red-100 px-8 py-2 text-sm font-medium text-red-800'}>
              {this.props.isWinner ? 'Winner!': 'You Lost...'}
            </span>
            </div>
          </div>
        </div>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {this.props.pokemon.map((pokemon) => (
            <Pokecard 
              key={pokemon.id} 
              id={pokemon.id} 
              name={pokemon.name} 
              type={pokemon.type} 
              exp={pokemon.base_experience} 
            />
        ))}
        </ul>
      </div>
    );
  }
}

export default Pokedex;
