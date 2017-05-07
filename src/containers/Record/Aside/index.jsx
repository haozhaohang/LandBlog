import React from 'react';

// component
import TopRead from 'Components/TopRead';
import Search from 'Components/Search';
import Achive from 'Components/Achive';
import TagCloud from 'Components/TagCloud';
import FriendlyLink from 'Components/FriendlyLink';

// css
import './index.styl';

const Aside = () =>
    (
        <aside className="record-aside-wrapper">
            <section className="record-aside-topRead">
                <TopRead />
            </section>

            <section className="record-aside-search">
                <Search />
            </section>

            <section className="record-aside-achive">
                <Achive />
            </section>

            <section className="record-aside-tagCloud">
                <TagCloud />
            </section>

            <section className="record-aside-friendlyLink">
                <FriendlyLink />
            </section>
        </aside>
    );

export default Aside;
