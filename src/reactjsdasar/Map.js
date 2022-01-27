import React from 'react'

const makanan = [
    {
        nama: "Soto",
        harga: 12000
    },
    {
        nama: "Boto",
        harga: 14000
    },
    {
        nama: "Mie Ayam",
        harga: 13000
    },
    {
        nama: "Nasi goreng",
        harga: 7000
    },
    {
        nama: "Rengginang",
        harga: 1700
    },
]

const total_bayar = makanan.reduce((total_harga,makanan) => total_harga + makanan.harga, 0)


const Map = () => {
    return (
        <div>
            <h2>Map</h2>
            <ul>
                {makanan.map((makanan, index) => (
                    <li> {index + 1} {makanan.nama} - harga {makanan.harga}</li>
                ))}
            </ul>

            <h2>Makanan diatas 11.000</h2>
            <ul>
                {makanan
                .filter((makanan) => makanan.harga > 11000)
                .map((makanan, index) => (
                    <li>
                        {index +1}. {makanan.nama} - Harga {makanan.harga}
                    </li>
                ))}
            </ul>

            <h2>total bayar : {total_bayar}</h2>
        </div>
    )
}

export default Map
