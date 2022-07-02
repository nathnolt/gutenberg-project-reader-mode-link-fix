{
	const as = $$('a')
	as.forEach(
		aEl => {
			const href = aEl.href
			const hashIndex = href.lastIndexOf('#')
			if(hashIndex != -1) {
				var slashed = href.slice(hashIndex)
				aEl.href = slashed
			}
		}
	)

	const h2s = $$('h2')
	h2s.forEach(
		h2El => {
			h2El.id = h2El.textContent.split(' ').join('_')
		}
	)

	function $$(selector, rootNode=document) {
		return rootNode.querySelectorAll(selector)
	}
}
