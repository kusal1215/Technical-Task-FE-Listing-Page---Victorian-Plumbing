import { useState, useEffect } from 'react';
import { Progress, Button } from 'antd';
import ReactStars from "react-rating-stars-component";


const ItemList = ({items}) => {

    const [visible, setVisible] = useState(4);
    const [pagePercentage, setPagePercentage] = useState(10);

    const loadMore = () =>{
        setVisible((prePage) => prePage + 4)
        setPagePercentage (Math.ceil( 100 * visible / items.products.length))
    }

    return (
        <div className="grid-list">

            <div className="ant-row">
                {items.products.slice(0, visible).map((item) => (
                        <div className="ant-col-lg-6" key={item.id} >
                            <div className="item-card">
                                <div className="card-header">
                                    <img src={item.image.url} alt="Image"/>
                                </div>
                                <div className="item-body">
                                    <div className="branding-img">
                                        <img src={item.brand.brandImage.url} alt="Image"/>
                                    </div>
                                    <div className="ant-row title-wrapper">
                                        <div className="title ant-col-lg-20">
                                            <p className='title'>{item.productName}</p>
                                        </div>
                                        <div className="wishlist ant-col-lg-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="price-wrapper">
                                        <p className='price'>£ {item.price.priceIncTax}</p>
                                        <p className='was-price'>{item.price.wasPriceIncTax}</p>
                                    </div>
                                    <div className="in-stock">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_437_2)">
                                                <rect width="20" height="20" rx="1.39394" fill="#32AA3C"/>
                                                <path d="M3.92047 11.1079L9.14774 16.3352L16.9887 4.57385" stroke="white" stroke-width="1.74242" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_437_2">
                                                    <rect width="20" height="20" rx="1.39394" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        <p className='stock-text'>In Stock</p>
                                    </div>
                                    <div className="review-wrapper">
                                        <ReactStars
                                            count={5}
                                            value={item.averageRating}
                                            size={24}
                                            activeColor="#ff960b"
                                        />
                                        <p>{item.reviewsCount}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                ))}

                <div className="load-more">
                    <p>You've viewed {visible} of {items.products.length} results</p>
                    <Progress className='progress' percent={pagePercentage} />
                    <Button onClick={loadMore}> Load More</Button>
                </div>

            </div>

        </div>

    );
}

export default ItemList;