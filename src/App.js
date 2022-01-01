import React, { Component } from 'react';
import styles from './App.module.css';
import ProductPreview from './components/productPreview';
import ProductDetails from './components/productDetails';
import Navigation from './components/Navigation';
import ProductData from './components/productData';

class App extends Component {
  state = {
    ProductData: ProductData,
    currentPreviewImgPos: 0,
    showHeartBeatSection: true,
  }

  onColorOptionClick = (pos) => {
    this.setState({ currentPreviewImgPos: pos });
  }

  onFeatureItemClick = (pos) => {
    let updatedState = false;
    if(pos === 1) {
      updatedState = true;
    }
    this.setState({showHeartBeatSection: updatedState});
  }

  render() {
    return (
      <div className="App">

        <Navigation />

        <div className={styles.mainContainer}>
          <div className={styles.productPreview}>
            <ProductPreview currentPreviewImg={this.state.ProductData.colorOptions[this.state.currentPreviewImgPos].imageUrl} 
            showHeartBeatSection={this.state.showHeartBeatSection} currentPreviewImgPos={this.state.currentPreviewImgPos} />
          </div>

          <div className={styles.ProductData}>
            <ProductDetails data={this.state.ProductData} onColorOptionClick={this.onColorOptionClick} currentPreviewImgPos={this.state.currentPreviewImgPos}
            onFeatureItemClick={this.onFeatureItemClick} showHeartBeatSection={this.state.showHeartBeatSection} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
