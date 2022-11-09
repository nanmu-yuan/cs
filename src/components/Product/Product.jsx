import '../../assets/scss/components/list.scss'
const List = (props) => {
    const { data: { list } } = props;
    return (
        <div className="list-container">
            <ul style={{display:"flex"}}>
                {
                    list.map(item => {
                        return (
                            <li key={item.id}>
                                <div className="list-item-box">
                                    <div className="product-img">
                                        <div className="product-img-bg"/>
                                        <img src={item.image} alt="" loading='lazy' />
                                    </div>
                                    <div className="product-info">
                                        <div className="product-title"></div>
                                        <div className="product-price"></div>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}
export default List