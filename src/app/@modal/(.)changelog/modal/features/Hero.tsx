'use client';

import { FluentEmoji } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

const useStyles = createStyles(
  ({ css, token }) => css`
    background: linear-gradient(to bottom, ${token.colorFillTertiary}, transparent);
  `,
);

const Hero = memo(() => {
  const { theme, styles } = useStyles();
  const { t } = useTranslation('changelog');
  return (
    null
  );
});

export default Hero;
