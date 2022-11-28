import React, { Component } from "react";

const POKE_API =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}/${padToThree(this.props.id)}.png`;

    return (
        <li
          className="Pokecard col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <img
              className="mx-auto h-32 w-32 flex-shrink-0 rounded-full bg-gray-200 p-2"
              src={imgSrc}
              alt={this.props.name}
            />
            <h3 className="mt-6 text-sm font-medium text-gray-900">
              {this.props.name}
            </h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Name</dt>
              <dd className="text-sm text-gray-500">{this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1)}</dd>
              <dt className="sr-only">Type</dt>
              <dd className="mt-3">
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  Exp: {this.props.exp}
                </span>
              </dd>
            </dl>
          </div>
        </li>
    );
  }
}

export default Pokecard;
