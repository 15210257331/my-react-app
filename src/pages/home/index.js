import React, { useState } from 'react';
import { Button, Image, Spin } from 'antd';
import { getImages } from '../../api/request.js'

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [imgList, setImgList] = useState([]);
  const queryImages = () => {
    setLoading(true);
    getImages().then(res => {
      console.log(res);
      setLoading(false);
      setImgList(res.data)
    })
  }
  const imgItem = imgList.map(item =>
    <div key={item.id} style={{ margin: '10px', display: 'inline-block' }}>
      <Image
        width={200}
        src={item.img}
      />
    </div>
  )
  return (
    <>
      <div style={{ float: 'right' }}>
        <Button type="primary" onClick={() => queryImages()}>获取图片</Button>
      </div>

      <Spin spinning={loading}>
        <Image.PreviewGroup>
          {imgItem}
        </Image.PreviewGroup>
      </Spin>
    </>
  )
}

export default Home