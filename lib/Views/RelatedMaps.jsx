import React from 'react';

import MenuPanel from 'terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuPanel.jsx';
import PanelStyles from 'terriajs/lib/ReactViews/Map/Panels/panel.scss';
import Styles from './related-maps.scss';
import classNames from 'classnames';

function RelatedMaps(props) {
    const dropdownTheme = {
        inner: Styles.dropdownInner
    };

    return (
        <MenuPanel theme={dropdownTheme}
                   btnText="Related Maps"
                   smallScreen={props.smallScreen}
                   viewState={props.viewState}
                   btnTitle="See related maps">
            <div className={classNames(PanelStyles.header)}>
                <label className={PanelStyles.heading}>Related Maps</label>
            </div>
      
        </MenuPanel>
    );
}

RelatedMaps.propTypes = {
    viewState: React.PropTypes.object.isRequired,
    smallScreen: React.PropTypes.bool
};

export default RelatedMaps;
