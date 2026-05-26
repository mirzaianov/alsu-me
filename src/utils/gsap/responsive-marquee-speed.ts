export const responsiveMarqueeSpeeds = {
  desktop: 44,
  mobile: 20,
  tablet: 28,
} as const;

export const responsiveMarqueeMediaQueries = {
  desktop: '(min-width: 1161px)',
  mobile: '(max-width: 576px)',
  tablet: '(min-width: 577px) and (max-width: 1160px)',
} as const;

type ResponsiveMarqueeSpeedConditions = {
  isDesktop: boolean;
  isTablet: boolean;
};

export const getResponsiveMarqueeSpeed = ({
  isDesktop,
  isTablet,
}: ResponsiveMarqueeSpeedConditions) => {
  if (isDesktop) {
    return responsiveMarqueeSpeeds.desktop;
  }

  if (isTablet) {
    return responsiveMarqueeSpeeds.tablet;
  }

  return responsiveMarqueeSpeeds.mobile;
};
