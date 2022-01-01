import React from "react";
import styles from '../App.module.css';

const ProductDetails = (props) => {
    const colorOptions = props.data.colorOptions.map((item, pos) => {
      const classArr = [styles.productImg]
      if(pos === props.currentPreviewImgPos) {
        classArr.push(styles.selectedProductImg);
      }
      return(
        <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName}  
        onClick={() => props.onColorOptionClick(pos)} />
      )
    })  

    const featureList = props.data.featureList.map((item, pos) => {
      const classArr = [styles.FeatureItem];
      if(pos === 1 && props.showHeartBeatSection){
        classArr.push(styles.selectedFeatureItem);
      } else if(pos === 0 && !props.showHeartBeatSection) {
        classArr.push(styles.selectedFeatureItem);
      }

      return(
        <button key={pos} className={classArr.join(' ')} onClick={() => props.onFeatureItemClick(pos)}>{item}</button>
      )
    })

    return (
        <div>
            <h1 className={styles.ProductTitle}>{props.data.title}</h1>
          <p className={styles.productDescription}>{props.data.description}</p>

          <h3 className={styles.sectionHeading}> Select Color </h3>
          <div>
            {colorOptions}
          </div>

          <h3 className={styles.sectionHeading}> Features </h3>
          <div>
            {featureList}
          </div>

          <div>
            <button className={styles.PrimaryButton}>Buy Now</button>
          </div>
        </div>
    )
}

export default ProductDetails;