import React from 'react'

export default class Searcher extends React.Component {
    render() {
        return (
            <div className="row justify-content-center mt-5 mb-5">
                <form style={{ marginTop: '1.45rem' }} className="col-10" role="search" method="GET">
                    <input
                        type="search"
                        className="full-width searcher"
                        name="products"
                        style={{
                            backgroundColor: `#30ce65`,
                            color: `#fff`,
                            borderRadius: `41px`,
                            padding: `20px`
                        }}
                        placeholder="Buscar"
                    />
                </form>
            </div>
        )
    }
}

