import '../../assets/scss/components/list.scss'
const List = (props) => {
   
    const { data: { list } } = props;
    console.log(list)
    return (
        <div className="list-container">
            <ul style={{display:"flex"}}>
                {
                   list.length>0 &&list.map(item => {
                    const imgsrc = JSON.parse(item.json_text)['baseImg'];
                    console.log(imgsrc)
                        return (
                            <li key={item.id}>
                                <div className="list-item-box">
                                    <div className="product-img">
                                        <div className="product-img-bg"/>

                                        <img src={imgsrc} loading='lazy' />
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