import React from 'react';
import LayoutHeader from '../components/robert/LayoutHeader';
import LayoutMain from '../components/robert/LayoutMain';
import LayoutFooter from '../components/robert/LayoutFooter';
import GiftCardForm from '../components/robert/GiftCardForm';
import GiftCardFormBg from '../components/robert/GiftCardBanner';
import GiftCardBg from '../components/robert/GiftCardBg';
import GiftCardFooter from '../components/robert/GiftCardFooter'
function GiftCard() {
  return (
    <div>
      <LayoutHeader />
      <GiftCardFormBg />
      <LayoutMain />
      <GiftCardForm />
      <GiftCardBg />
      <GiftCardFooter />
      <LayoutFooter />
    </div>
  );
}

export default GiftCard;
