const req = require.context('!svg-sprite-loader?{"symbolId":"q-[name]"}!./svgs', false, /.svg$/)

const requireAllSvgs = requireContext => requireContext.keys().map(requireContext)

requireAllSvgs(req)
