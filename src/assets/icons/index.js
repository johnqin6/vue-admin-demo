const req = require.context('!svg-sprite-loader?{"symbolId":"q-[name]"}!./svgs', false, /.svg$/)

const requireAllSvgs = requireContext => requireContext.keys().map(requireContext)

requireAllSvgs(req)
// import Vue from 'vue'
// import qSvgIcon from '@/components/com'
// const requireAll = requireContext => requireContext.keys().map(requireContext)
// const req = require.context('./svgs', false, /\.svg$/)
// const iconMap = requireAll(req)
// console.log(iconMap)
