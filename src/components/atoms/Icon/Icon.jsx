import PropTypes from 'prop-types';
import {
  Bars,
  Bell,
  Calendar,
  Camera,
  Chevron,
  Config,
  Heart,
  House,
  Hyperlink,
  Menus,
  Search,
  User,
  Spinner,
} from 'assets';
import * as S from './style';

export function Icon({ className, icon }) {
  const iconList = {
    bars: <Bars />,
    bell: <Bell />,
    calendar: <Calendar />,
    camera: <Camera />,
    chevron: <Chevron />,
    config: <Config />,
    heart: <Heart />,
    house: <House />,
    hyperlink: <Hyperlink />,
    menus: <Menus />,
    search: <Search />,
    user: <User />,
    spinner: <Spinner/>,
  };

  return <S.I className={className}>{iconList[icon]}</S.I>;
}

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  className: null,
};
