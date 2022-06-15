import React from 'react';
import LayoutHeader from '../components/robert/LayoutHeader';
import LayoutMain from '../components/robert/LayoutMain';
import LayoutFooter from '../components/robert/LayoutFooter';
import GiftCardForm from '../components/robert/GiftCardForm';
import GiftCardFormBg from '../components/robert/GiftCardBanner';
function GiftCard() {
  return (
    <div>
      <LayoutHeader />
      <GiftCardFormBg />
      <LayoutMain />
      <GiftCardForm />
      <LayoutFooter />
    </div>
  );
}

export default GiftCard;
