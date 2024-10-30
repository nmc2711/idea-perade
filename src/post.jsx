import React from 'react';

function Post() {
  return (
    <div className='blog-post-container'>
      <h1 className='post-title'>지마켓XLG 기획전 W20WHN 세탁기 내돈내산</h1>
      <p className='post-content'>
        오늘은 혁신적인 무선 이어폰에 대한 리뷰를 작성해보려고 합니다. 이
        이어폰은 최첨단 기술을 사용해 최고의 음질과 사용자 경험을 제공합니다.{' '}
        <br />
        <br />
        소음 제거 기능이 특히 인상적이며, 외부 소음을 거의 완벽하게 차단해
        줍니다.
      </p>

      {/* 광고 섹션 */}
      <div className='ad-container'>
        <h2 className='ad-title'>이 이어폰을 구매하세요!</h2>
        <p className='ad-description'>
          지금 이 이어폰을 구매하면 특별 할인을 받을 수 있습니다. 최고의 음질을
          경험해 보세요.
        </p>
        <a className='product-link' href='https://example.com'>
          제품 페이지로 이동
        </a>
      </div>

      <p className='post-content'>
        또한 이어폰의 착용감도 매우 좋습니다. 귀에 오래 착용해도 불편함이 없고,
        안정적인 핏을 제공합니다.
        <br />
        <br />
        음악 감상뿐만 아니라 통화 시에도 훌륭한 성능을 보여줍니다.
      </p>

      {/* 또 다른 광고 섹션 */}
      <div className='ad-container'>
        <h2 className='ad-title'>연관 상품도 확인해 보세요!</h2>
        <p className='ad-description'>
          이 이어폰과 함께 사용할 수 있는 고품질 충전 케이스도 확인해 보세요.
          지금 구매 시 추가 혜택!
        </p>
        <a className='product-link' href='https://example.com'>
          관련 상품 보기
        </a>
      </div>

      <p className='post-content'>
        이와 같이 전반적인 사용자 경험이 매우 뛰어나며, 이 이어폰은 가격 대비
        훌륭한 선택이라고 할 수 있습니다. 만약 여러분이 무선 이어폰을 찾고
        있다면, 이 제품을 고려해보는 것을 추천드립니다.
      </p>
    </div>
  );
}

export default Post;

/* CSS for Naver Blog Style Post */
