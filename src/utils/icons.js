import noclick_house from '../assets/icons/noclick-house.svg'
import noclick_back from '../assets/icons/noclick-back.svg'
import noclick_chartline from '../assets/icons/noclick-chart-line.svg'
import noclick_settings from '../assets/icons/noclick-settings.svg'
import noclick_shopping_cart from '../assets/icons/noclick-shopping-cart.svg'
import noclick_user_cog from '../assets/icons/noclick-user-cog.svg'

import whenclick_house from '../assets/icons/whenclick-house.svg'
import whenclick_back from '../assets/icons/whenclick-back.svg'
import whenclick_chartline from '../assets/icons/whenclick-chart-line.svg'
import whenclick_settings from '../assets/icons/whenclick-settings.svg'
import whenclick_shopping_cart from '../assets/icons/whenclick-shopping-cart.svg'
import whenclick_user_cog from '../assets/icons/whenclick-user-cog.svg'
import circle_percent from '../assets/icons/circle-percent.svg'
import group_90 from '../assets/icons/Group 90.svg'
import barLineChart from '../assets/icons/BarLineChart.svg'
import barLineChart2 from '../assets/icons/BarLineChart-2.svg'
import pieLayer from '../assets/icons/PieLayer.svg'
import legends from '../assets/icons/Legends.svg'

const home_icons = {
    noClick: {
        house: noclick_house,
        cart: noclick_shopping_cart,
        chartline: noclick_chartline,
        settings: noclick_settings,
        userCog: noclick_user_cog,
        back: noclick_back,
    },
    clicked: {
        house: whenclick_house,
        cart: whenclick_shopping_cart,
        chartline: whenclick_chartline,
        settings: whenclick_settings,
        userCog: whenclick_user_cog,
        back: whenclick_back,
    },
    others: {
        circle_percent,
        group_90,
        barLineChart,
        barLineChart2,
        pieLayer,
        legends,
    },
};

export default home_icons;
