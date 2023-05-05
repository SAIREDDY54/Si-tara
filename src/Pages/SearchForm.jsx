const SearchForm = (props) => {
    return (
        <>
            <form class="m-search-form" autocomplete="off" style={{ margin: '5px'}}>
                <div class="a-text-field a-text-field--search">
                    <input type="search" id="search-default" placeholder="Search" value={props.value} onChange={props.onChange}/>
                    <button type="submit" class="a-text-field__icon-search">
                        <i class="a-icon ui-ic-search" title="LoremIpsum"></i>
                    </button>
                    <button type="button" class="a-text-field__icon-close">
                        <i class="a-icon ui-ic-close-small" title="LoremIpsum"></i>
                    </button>
                </div>
            </form>
        </>
    )
}

export default SearchForm;