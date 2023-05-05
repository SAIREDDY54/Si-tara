const Header = () => {
    return (
        <header class="o-header">
            <div class="o-header__top-container">
                <div class="e-container">
                    <div class="o-header__top">
                        <a href="/" class="o-header__logo" aria-label="Bosch Logo" style={{ bottom: 0}}>
                            <svg
                                // width="108px"
                                // height="24px"
                                // viewBox="0 0 108 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    id="bosch-logo-text"
                                    d="M78.19916,15.03735c0,3.46057-3.1618,5.1535-6.12445,5.1535c-3.41083,0-5.17847-1.29462-6.57263-2.96265 l2.51453-2.48962c1.07056,1.36926,2.46472,2.0415,4.0083,2.0415c1.29462,0,2.14105-0.62244,2.14105-1.56848 c0-0.99585-0.77179-1.31952-2.83813-1.74274l-0.54773-0.12451c-2.48962-0.52283-4.53113-1.91699-4.53113-4.75519 c0-3.112,2.53943-4.97925,5.87549-4.97925c2.8382,0,4.65564,1.21991,5.77594,2.48962l-2.46472,2.43988 c-0.82831-0.91748-2.00061-1.44946-3.23651-1.46893c-0.89624,0-1.91699,0.42328-1.91699,1.46893 c0,0.97095,1.07056,1.31946,2.41492,1.59332l0.54773,0.12451C75.51038,10.73029,78.24896,11.42737,78.19916,15.03735z  M64.80499,11.92529c0,4.65558-2.66394,8.29047-7.26971,8.29047c-4.58093,0-7.26971-3.63489-7.26971-8.29047 c0-4.63068,2.68878-8.29047,7.26971-8.29047C62.14105,3.63483,64.80499,7.29462,64.80499,11.92529z M60.92114,11.92529 c0-2.46472-1.1452-4.48132-3.38586-4.48132s-3.36102,1.9917-3.36102,4.48132s1.12036,4.50623,3.36102,4.50623 S60.92114,14.43982,60.92114,11.92529z M87.06226,16.43152c-1.74274,0-3.56018-1.44397-3.56018-4.60583 c0-2.81323,1.69293-4.38171,3.46057-4.38171c1.39423,0,2.21576,0.64728,2.8631,1.76764l3.18671-2.11621 c-1.59338-2.41492-3.48547-3.43567-6.09961-3.43567c-4.78009,0-7.36926,3.70953-7.36926,8.19086 c0,4.70544,2.86304,8.39008,7.31946,8.39008c3.13696,0,4.63074-1.09546,6.24902-3.43567l-3.21167-2.16602 C89.25311,15.68463,88.55603,16.43152,87.06226,16.43152z M48.97095,15.46057c0,2.66388-2.43982,4.40662-4.92944,4.40662H35.9502 V4.0332h7.44397c2.8382,0,4.9046,1.44397,4.9046,4.35681c0.01666,1.43036-0.85675,2.72058-2.19086,3.23651 C46.10791,11.65143,48.97095,12.29877,48.97095,15.46057z M39.80914,10.25726h2.83813 c0.02155,0.00134,0.04309,0.00226,0.06464,0.00269c0.81476,0.01575,1.48804-0.6319,1.50385-1.44666 c0.00342-0.0567,0.00342-0.11353,0-0.17017c-0.047-0.77802-0.71576-1.37061-1.49377-1.32361h-2.88794L39.80914,10.25726z  M44.76349,14.98755c0-0.92114-0.67218-1.54358-2.09131-1.54358h-2.81323v3.11206h2.88794 C43.91699,16.55603,44.76349,16.13275,44.76349,14.98755z M103.64313,4.03326v5.82568H98.8382V4.03326h-4.15771v15.83398h4.15771 v-6.24896h4.80493v6.24896h4.15771V4.03326H103.64313z"
                                />
                                <path
                                    id="bosch-logo-anker"
                                    d="M12,0C5.37256,0,0,5.37256,0,12c0,6.62738,5.37256,12,12,12s12-5.37262,12-12C23.99646,5.37402,18.62598,0.00354,12,0z  M12,22.87964C5.99133,22.87964,1.12036,18.00867,1.12036,12S5.99133,1.1203,12,1.1203S22.87964,5.99133,22.87964,12 C22.87354,18.0061,18.0061,22.87354,12,22.87964z M19.50293,7.05475c-0.66852-1.01306-1.53552-1.88-2.54858-2.54852h-0.82159 v4.10785H7.89209V4.50623H7.04565c-4.13873,2.73114-5.27972,8.30029-2.54858,12.43896 c0.66852,1.01306,1.53552,1.88007,2.54858,2.54858h0.84644v-4.10791h8.24066v4.10791h0.82159 C21.09308,16.76257,22.23407,11.19348,19.50293,7.05475z M6.74689,17.87549c-3.24493-2.88354-3.5379-7.85168-0.65436-11.09668 c0.20508-0.23077,0.42358-0.44928,0.65436-0.65436V17.87549z M16.13275,14.24066H7.89209V9.73444h8.24066V14.24066z  M17.84827,17.25549c-0.18768,0.2088-0.38629,0.40747-0.59515,0.59509v-2.48962V8.61407V6.12445 C20.49121,9.03387,20.75763,14.0174,17.84827,17.25549z"
                                />
                            </svg>
                        </a>
                        {/* <div class="o-header__quicklinks">
                            <button type="button" class="a-button a-button--integrated">
                                <i
                                    class="a-icon a-button__icon boschicon-bosch-ic-login"
                                    title="Lorem Ipsum"
                                ></i>
                                <span class="a-button__label">Login</span>
                            </button>
                            <button type="button" class="a-button a-button--integrated">
                                <i
                                    class="a-icon a-button__icon boschicon-bosch-ic-chat"
                                    title="Lorem Ipsum"
                                ></i>
                                <span class="a-button__label">Contact</span>
                            </button>
                        </div>
                        <div class="o-header__search">
                            <form class="m-search-form" autocomplete="off">
                                <div class="a-text-field a-text-field--search">
                                    <input type="search" id="search-null" placeholder="Search" />
                                    <button type="submit" class="a-text-field__icon-search">
                                        <i class="a-icon ui-ic-search" title="LoremIpsum"></i>
                                    </button>
                                    <button type="button" class="a-text-field__icon-close">
                                        <i class="a-icon ui-ic-close-small" title="LoremIpsum"></i>
                                    </button>
                                </div>
                            </form>
                            <button
                                type="button"
                                class="a-button a-button--integrated o-header__search-open"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <i
                                    class="a-icon a-button__icon boschicon-bosch-ic-search"
                                    title="Lorem Ipsum"
                                ></i>
                                <span class="a-button__label">Search</span>
                            </button>
                        </div>
                        <button
                            type="button"
                            class="a-button a-button--integrated o-header__menu-trigger"
                            aria-haspopup="true"
                            aria-label="Toggle Main Navigation"
                        >
                            <i class="o-header__menu-trigger-icon a-icon a-button__icon">
                                <span class="o-header__menu-trigger-icon-bar"></span>
                                <span class="o-header__menu-trigger-icon-bar"></span>
                                <span class="o-header__menu-trigger-icon-bar"></span>
                                <span class="o-header__menu-trigger-icon-bar"></span>
                            </i>
                            <span class="o-header__menu-trigger-label a-button__label">Menu</span>
                        </button> */}
                    </div>
                </div>
            </div>
            {/* <div class="o-header__search_suggestions_container">
                <div class="e-container">
                    <ul class="a-search-suggestions">
                        <li class="a-search-suggestions__item">
                            <a href="#" class="a-search-suggestions__result-link" tabindex="-1">
                                <em>Product XYZ</em>
                                Lorem ipsum dolor
                            </a>
                        </li>
                        <li class="a-search-suggestions__item">
                            <a href="#" class="a-search-suggestions__result-link" tabindex="-1">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr Product XYZ
                                another line can be very long or very short, however when text
                                breaks and the Product XYZ is mentioned again,
                                <em>we should highlight this</em>
                            </a>
                        </li>
                        <li class="a-search-suggestions__item">
                            <a href="#" class="a-search-suggestions__result-link" tabindex="-1">
                                Lorem ipsum
                                <em>Product XYZ</em>
                            </a>
                        </li>
                        <li class="a-search-suggestions__item">
                            <a href="#" class="a-search-suggestions__result-link" tabindex="-1">
                                <em>Product XYZ</em>
                                Lorem ipsum dolor
                            </a>
                        </li>
                        <li
                            class="a-search-suggestions__item a-search-suggestions__results-link"
                        >
                            <div class="a-link -icon">
                                <a href="/" target="_self" tabindex="-1">
                                    <span>All</span>
                                    <span>
                                        Results
                                        <i
                                            class="a-icon ui-ic-nosafe-lr-right-small"
                                            title="nosafe-lr-right-small"
                                        ></i>
                                    </span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div> */}
            {/* <div class="e-container">
                <div class="o-header__meta">
                    <ol class="o-header__breadcrumbs">
                        <li>
                            <div class="a-link -icon">
                                <a href="/" target="_self">
                                    <span>News and</span>
                                    <span>
                                        Stories
                                        <i
                                            class="a-icon ui-ic-nosafe-lr-right-small"
                                            title="nosafe-lr-right-small"
                                        ></i>
                                    </span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div class="a-link -icon">
                                <a href="/" target="_self">
                                    <span>Internet of</span>
                                    <span>
                                        Things
                                        <i
                                            class="a-icon ui-ic-nosafe-lr-right-small"
                                            title="nosafe-lr-right-small"
                                        ></i>
                                    </span>
                                </a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div class="a-link -icon">
                                <a href="/" target="_self">
                                    <span>Page</span>
                                    <span>
                                        Name
                                        <i
                                            class="a-icon ui-ic-nosafe-lr-right-small"
                                            title="nosafe-lr-right-small"
                                        ></i>
                                    </span>
                                </a>
                            </div>
                        </li>
                    </ol>
                    <span class="o-header__subbrand">Subbrand identifier</span>
                </div>
            </div> */}
            {/* <div class="o-header__navigation-container">
                <div class="e-container">
                    <nav class="o-header__navigation" aria-label="Main navigation">
                        <ul class="o-header__navigation-first-level" role="menu">
                            <li class="o-header__navigation-first-level-item">
                                <button
                                    type="button"
                                    class="a-button a-button--integrated -without-icon o-header__navigation-trigger"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    tabindex="0"
                                >
                                    <span class="a-button__label">Products &amp; Services</span>
                                </button>
                                <i
                                    class="a-icon o-header__navigation-arrow ui-ic-right"
                                    title="right"
                                ></i>
                                <ul
                                    class="o-header__navigation-sub-level"
                                    role="menu"
                                    aria-hidden="true"
                                >
                                    <button
                                        type="button"
                                        class="a-button a-button--integrated -without-label o-header__navigation-close-trigger"
                                        aria-label="sub menu trigger"
                                        tabindex="-1"
                                    >
                                        <i
                                            class="a-icon a-button__icon boschicon-bosch-ic-arrow-left"
                                            title="Lorem Ipsum"
                                        ></i>
                                    </button>
                                    <li
                                        class="o-header__navigation-sub-level-item o-header__navigation-sub-level-item-overview"
                                    >
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>Products &amp; Services overview</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="o-header__navigation-sub-level-item">
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>Mobility</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="o-header__navigation-sub-level-item">
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>At home</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="o-header__navigation-sub-level-item">
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>Industry and trades</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="o-header__navigation-sub-level-item">
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>Connected products and services</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="o-header__navigation-sub-level-item">
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>Market-specific solutions</span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="o-header__navigation-first-level-item">
                                <button
                                    type="button"
                                    class="a-button a-button--integrated -without-icon o-header__navigation-trigger"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    tabindex="0"
                                >
                                    <span class="a-button__label">Internet of Things</span>
                                </button>
                                <i
                                    class="a-icon o-header__navigation-arrow ui-ic-right"
                                    title="right"
                                ></i>
                                <ul
                                    class="o-header__navigation-sub-level"
                                    role="menu"
                                    aria-hidden="true"
                                >
                                    <button
                                        type="button"
                                        class="a-button a-button--integrated -without-label o-header__navigation-close-trigger"
                                        aria-label="sub menu trigger"
                                        tabindex="-1"
                                    >
                                        <i
                                            class="a-icon a-button__icon boschicon-bosch-ic-arrow-left"
                                            title="Lorem Ipsum"
                                        ></i>
                                    </button>
                                    <li
                                        class="o-header__navigation-sub-level-item o-header__navigation-sub-level-item-overview"
                                    >
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>Internet of Things overview</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="o-header__navigation-sub-level-item">
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>Connected living</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="o-header__navigation-sub-level-item">
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>Connected mobility</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="o-header__navigation-sub-level-item">
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger--external o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_blank" tabindex="-1">
                                                <span>External link</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="o-header__navigation-sub-level-item">
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>Connected industry</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="o-header__navigation-sub-level-item">
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>Connected lorem</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="o-header__navigation-sub-level-item">
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>Connected ipsum</span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="o-header__navigation-first-level-item">
                                <button
                                    type="button"
                                    class="a-button a-button--integrated -without-icon o-header__navigation-trigger"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    tabindex="0"
                                >
                                    <span class="a-button__label">Stories</span>
                                </button>
                                <i
                                    class="a-icon o-header__navigation-arrow ui-ic-right"
                                    title="right"
                                ></i>
                                <ul
                                    class="o-header__navigation-sub-level"
                                    role="menu"
                                    aria-hidden="true"
                                >
                                    <button
                                        type="button"
                                        class="a-button a-button--integrated -without-label o-header__navigation-close-trigger"
                                        aria-label="sub menu trigger"
                                        tabindex="-1"
                                    >
                                        <i
                                            class="a-icon a-button__icon boschicon-bosch-ic-arrow-left"
                                            title="Lorem Ipsum"
                                        ></i>
                                    </button>
                                    <li
                                        class="o-header__navigation-sub-level-item o-header__navigation-sub-level-item-overview"
                                    >
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>Stories overview</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="o-header__navigation-sub-level-item">
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>Sustainability #LikeABosch</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="o-header__navigation-sub-level-item">
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>Tech for transition</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="o-header__navigation-sub-level-item">
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>#NextBigThing</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="o-header__navigation-sub-level-item">
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger--external o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_blank" tabindex="-1">
                                                <span>External link</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="o-header__navigation-sub-level-item">
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>Artificial Intelligence</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="o-header__navigation-sub-level-item">
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>Distributed Ledger Technology</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="o-header__navigation-sub-level-item">
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>Drive #LikeABosch</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="o-header__navigation-sub-level-item">
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>Podcast – From KNOW-HOW to WOW</span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="o-header__navigation-first-level-item">
                                <button
                                    type="button"
                                    class="a-button a-button--integrated -without-icon o-header__navigation-trigger"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    tabindex="0"
                                >
                                    <span class="a-button__label">Company</span>
                                </button>
                                <i
                                    class="a-icon o-header__navigation-arrow ui-ic-right"
                                    title="right"
                                ></i>
                                <ul
                                    class="o-header__navigation-sub-level"
                                    role="menu"
                                    aria-hidden="true"
                                >
                                    <button
                                        type="button"
                                        class="a-button a-button--integrated -without-label o-header__navigation-close-trigger"
                                        aria-label="sub menu trigger"
                                        tabindex="-1"
                                    >
                                        <i
                                            class="a-icon a-button__icon boschicon-bosch-ic-arrow-left"
                                            title="Lorem Ipsum"
                                        ></i>
                                    </button>
                                    <li
                                        class="o-header__navigation-sub-level-item o-header__navigation-sub-level-item-overview"
                                    >
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>Company overview</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="o-header__navigation-sub-level-item">
                                        <button
                                            type="button"
                                            class="a-button a-button--integrated -without-icon o-header__navigation-trigger"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            tabindex="-1"
                                        >
                                            <span class="a-button__label">Our People</span>
                                        </button>
                                        <i
                                            class="a-icon o-header__navigation-arrow ui-ic-right"
                                            title="right"
                                        ></i>
                                        <ul
                                            class="o-header__navigation-sub-level"
                                            role="menu"
                                            aria-hidden="true"
                                        >
                                            <button
                                                type="button"
                                                class="a-button a-button--integrated -without-label o-header__navigation-close-trigger"
                                                aria-label="sub menu trigger"
                                                tabindex="-1"
                                            >
                                                <i
                                                    class="a-icon a-button__icon boschicon-bosch-ic-arrow-left"
                                                    title="Lorem Ipsum"
                                                ></i>
                                            </button>
                                            <li
                                                class="o-header__navigation-sub-level-item o-header__navigation-sub-level-item-overview"
                                            >
                                                <div
                                                    class="a-link a-link--integrated o-header__navigation-trigger"
                                                >
                                                    <a href="/" target="_self" tabindex="-1">
                                                        <span>Our People overview</span>
                                                    </a>
                                                </div>
                                            </li>
                                            <li class="o-header__navigation-sub-level-item">
                                                <div
                                                    class="a-link a-link--integrated o-header__navigation-trigger"
                                                >
                                                    <a href="/" target="_self" tabindex="-1">
                                                        <span>Board of management</span>
                                                    </a>
                                                </div>
                                            </li>
                                            <li class="o-header__navigation-sub-level-item">
                                                <div
                                                    class="a-link a-link--integrated o-header__navigation-trigger"
                                                >
                                                    <a href="/" target="_self" tabindex="-1">
                                                        <span>Supervisory board</span>
                                                    </a>
                                                </div>
                                            </li>
                                            <li class="o-header__navigation-sub-level-item">
                                                <div
                                                    class="a-link a-link--integrated o-header__navigation-trigger"
                                                >
                                                    <a href="/" target="_self" tabindex="-1">
                                                        <span>Robert Bosch Industrietreuhand KG</span>
                                                    </a>
                                                </div>
                                            </li>
                                            <li class="o-header__navigation-sub-level-item">
                                                <div
                                                    class="a-link a-link--integrated o-header__navigation-trigger--external o-header__navigation-trigger"
                                                >
                                                    <a href="/" target="_blank" tabindex="-1">
                                                        <span>External link</span>
                                                    </a>
                                                </div>
                                            </li>
                                            <li class="o-header__navigation-sub-level-item">
                                                <div
                                                    class="a-link a-link--integrated o-header__navigation-trigger"
                                                >
                                                    <a href="/" target="_self" tabindex="-1">
                                                        <span>Honorary chairman</span>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="o-header__navigation-sub-level-item">
                                        <button
                                            type="button"
                                            class="a-button a-button--integrated -without-icon o-header__navigation-trigger"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            tabindex="-1"
                                        >
                                            <span class="a-button__label">Annual report and figures</span>
                                        </button>
                                        <i
                                            class="a-icon o-header__navigation-arrow ui-ic-right"
                                            title="right"
                                        ></i>
                                        <ul
                                            class="o-header__navigation-sub-level"
                                            role="menu"
                                            aria-hidden="true"
                                        >
                                            <button
                                                type="button"
                                                class="a-button a-button--integrated -without-label o-header__navigation-close-trigger"
                                                aria-label="sub menu trigger"
                                                tabindex="-1"
                                            >
                                                <i
                                                    class="a-icon a-button__icon boschicon-bosch-ic-arrow-left"
                                                    title="Lorem Ipsum"
                                                ></i>
                                            </button>
                                            <li
                                                class="o-header__navigation-sub-level-item o-header__navigation-sub-level-item-overview"
                                            >
                                                <div
                                                    class="a-link a-link--integrated o-header__navigation-trigger"
                                                >
                                                    <a href="/" target="_self" tabindex="-1">
                                                        <span>Annual report and figures overview</span>
                                                    </a>
                                                </div>
                                            </li>
                                            <li class="o-header__navigation-sub-level-item">
                                                <div
                                                    class="a-link a-link--integrated o-header__navigation-trigger"
                                                >
                                                    <a href="/" target="_self" tabindex="-1">
                                                        <span>Annual report</span>
                                                    </a>
                                                </div>
                                            </li>
                                            <li class="o-header__navigation-sub-level-item">
                                                <div
                                                    class="a-link a-link--integrated o-header__navigation-trigger"
                                                >
                                                    <a href="/" target="_self" tabindex="-1">
                                                        <span>Key figures</span>
                                                    </a>
                                                </div>
                                            </li>
                                            <li class="o-header__navigation-sub-level-item">
                                                <div
                                                    class="a-link a-link--integrated o-header__navigation-trigger"
                                                >
                                                    <a href="/" target="_self" tabindex="-1">
                                                        <span>Business sectors</span>
                                                    </a>
                                                </div>
                                            </li>
                                            <li class="o-header__navigation-sub-level-item">
                                                <div
                                                    class="a-link a-link--integrated o-header__navigation-trigger"
                                                >
                                                    <a href="/" target="_self" tabindex="-1">
                                                        <span>Ownership structure</span>
                                                    </a>
                                                </div>
                                            </li>
                                            <li class="o-header__navigation-sub-level-item">
                                                <div
                                                    class="a-link a-link--integrated o-header__navigation-trigger"
                                                >
                                                    <a href="/" target="_self" tabindex="-1">
                                                        <span>Brands</span>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="o-header__navigation-sub-level-item">
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>Our history</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="o-header__navigation-sub-level-item">
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>Sustainability</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="o-header__navigation-sub-level-item">
                                        <div
                                            class="a-link a-link--integrated o-header__navigation-trigger"
                                        >
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>Supply chain</span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="o-header__navigation-first-level-item">
                                <div
                                    class="a-link a-link--integrated o-header__navigation-trigger--external o-header__navigation-trigger"
                                >
                                    <a href="/" target="_blank" tabindex="0">
                                        <span>External link</span>
                                    </a>
                                </div>
                            </li>
                            <li class="o-header__navigation-first-level-item">
                                <div class="a-link a-link--integrated o-header__navigation-trigger">
                                    <a href="/" target="_self" tabindex="0"><span>Research</span></a>
                                </div>
                            </li>
                            <li class="o-header__navigation-first-level-item">
                                <div class="a-link a-link--integrated o-header__navigation-trigger">
                                    <a href="/" target="_self" tabindex="0"><span>Careers</span></a>
                                </div>
                            </li>
                            <li class="o-header__language-selector">
                                <div class="m-language-selector">
                                    <div class="a-link -icon">
                                        <a
                                            href="https://www.bosch.com/websites-worldwide/"
                                            target="_blank"
                                        >
                                            <i class="a-icon boschicon-bosch-ic-globe" title="globe"></i>
                                            <span>Bosch Global</span>
                                        </a>
                                    </div>
                                    <div class="a-dropdown">
                                        <select
                                            id="demo"
                                            aria-label="here goes the aria label for the dropwdown"
                                        >
                                            <option value='"Deutsch"'>Deutsch</option>
                                            <option value='"English"'>English</option>
                                            <option value='"Französisch"'>Französisch</option>
                                        </select>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div> */}
        </header>
    )
}

export default Header;