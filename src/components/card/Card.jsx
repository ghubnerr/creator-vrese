import React from "react"

export default function Card(props) {

    const creator = props.creator
    return(
        <div>
        <a key={creator.id} href={creator.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={creator.imageSrc}
                    alt={creator.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{creator.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{creator.price}</p>
              </a>
        </div>
    )
}