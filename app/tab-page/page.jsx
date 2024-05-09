import { TabContent, TabSwitcher, Tabs } from '@/components'
import React from 'react'

function page() {
    return (
        <div className="page__tab page__tab--row-reverse">
            <div className="container">
                <Tabs>
                    <div className="tabs__head tabs__head__arrow">
                        <TabSwitcher tabId={0}>
                            <span>1. BÖLÜM</span> <sub>Lorem Ipsum</sub>
                        </TabSwitcher>
                        <TabSwitcher tabId={1}>
                            <span>2. BÖLÜM</span> <sub>Lorem Ipsum</sub>
                        </TabSwitcher>
                        <TabSwitcher tabId={2}>
                            <span>3. BÖLÜM</span> <sub>Lorem Ipsum</sub>
                        </TabSwitcher>
                        <TabSwitcher tabId={3}>
                            <span>4. BÖLÜM</span> <sub>Lorem Ipsum</sub>
                        </TabSwitcher>
                        <TabSwitcher tabId={4}>
                            <span>5. BÖLÜM</span> <sub>Lorem Ipsum</sub>
                        </TabSwitcher>
                    </div>
                    <div className="tabs__content">
                        <TabContent id={0}>
                            
                        <h2 className='m-b-8'>1. BÖLÜM LOREM IPSUM?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus lectus. Maecenas turpis magna, fringilla non nisi ut, posuere laoreet quam. Donec purus neque, imperdiet vitae varius quis, consequat eu nisl. Sed ultricies sollicitudin nibh, id posuere dui laoreet vitae. Donec congue massa vel justo mattis, eget sagittis erat maximus. Sed vehicula semper suscipit. Mauris lacinia scelerisque ligula sit amet feugiat. Cras pulvinar sit amet nisl non faucibus. Curabitur dui nisi, consequat sed mi a, lacinia vestibulum arcu.</p>
                            <br />
                            <p>Integer lectus magna, consequat eu ornare vitae, volutpat quis nisi. Nunc id neque dolor. Aliquam nec feugiat tortor. Praesent at imperdiet tellus. Duis dictum ipsum non ipsum varius ornare. Praesent velit dolor, malesuada viverra sem vel, dapibus tempor massa. Ut ex lorem, fermentum quis sodales ac, aliquam sit amet sapien. Suspendisse ut ante fermentum, ultricies mauris a, bibendum lectus. Sed mollis dolor eget orci rutrum laoreet.</p>
                            <br />
                            <p>Etiam at mauris purus. Praesent laoreet rutrum malesuada. Aliquam consequat lacus quis tortor molestie interdum. Integer bibendum mauris eu ante scelerisque, non vehicula nulla volutpat. In turpis nibh, convallis vel tempus et, laoreet at neque. Morbi turpis turpis, ullamcorper eu porta vel, viverra eu magna. Nulla laoreet, erat in vehicula sollicitudin, diam sem facilisis magna, a euismod velit urna ut nisi. Donec laoreet metus eu risus bibendum laoreet. Nam arcu nisl, consectetur eu hendrerit at, venenatis eu tortor. Etiam ut sapien ex. Morbi ultrices eget tellus et vulputate. Quisque vestibulum nisl vel orci ultrices tristique. Curabitur risus tellus, iaculis vitae egestas ac, fermentum non velit.</p>
                            
                            <h2 className='m-b-8 m-t-24'>LOREM IPSUM?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus lectus. Maecenas turpis magna, fringilla non nisi ut, posuere laoreet quam. Donec purus neque, imperdiet vitae varius quis, consequat eu nisl. Sed ultricies sollicitudin nibh, id posuere dui laoreet vitae. Donec congue massa vel justo mattis, eget sagittis erat maximus. Sed vehicula semper suscipit. Mauris lacinia scelerisque ligula sit amet feugiat. Cras pulvinar sit amet nisl non faucibus. Curabitur dui nisi, consequat sed mi a, lacinia vestibulum arcu.</p>
                            <br />
                            <p>Integer lectus magna, consequat eu ornare vitae, volutpat quis nisi. Nunc id neque dolor. Aliquam nec feugiat tortor. Praesent at imperdiet tellus. Duis dictum ipsum non ipsum varius ornare. Praesent velit dolor, malesuada viverra sem vel, dapibus tempor massa. Ut ex lorem, fermentum quis sodales ac, aliquam sit amet sapien. Suspendisse ut ante fermentum, ultricies mauris a, bibendum lectus. Sed mollis dolor eget orci rutrum laoreet.</p>
                            <br />
                            <p>Etiam at mauris purus. Praesent laoreet rutrum malesuada. Aliquam consequat lacus quis tortor molestie interdum. Integer bibendum mauris eu ante scelerisque, non vehicula nulla volutpat. In turpis nibh, convallis vel tempus et, laoreet at neque. Morbi turpis turpis, ullamcorper eu porta vel, viverra eu magna. Nulla laoreet, erat in vehicula sollicitudin, diam sem facilisis magna, a euismod velit urna ut nisi. Donec laoreet metus eu risus bibendum laoreet. Nam arcu nisl, consectetur eu hendrerit at, venenatis eu tortor. Etiam ut sapien ex. Morbi ultrices eget tellus et vulputate. Quisque vestibulum nisl vel orci ultrices tristique. Curabitur risus tellus, iaculis vitae egestas ac, fermentum non velit.</p>
                            <h2 className='m-b-8 m-t-24'>LOREM IPSUM?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus lectus. Maecenas turpis magna, fringilla non nisi ut, posuere laoreet quam. Donec purus neque, imperdiet vitae varius quis, consequat eu nisl. Sed ultricies sollicitudin nibh, id posuere dui laoreet vitae. Donec congue massa vel justo mattis, eget sagittis erat maximus. Sed vehicula semper suscipit. Mauris lacinia scelerisque ligula sit amet feugiat. Cras pulvinar sit amet nisl non faucibus. Curabitur dui nisi, consequat sed mi a, lacinia vestibulum arcu.</p>
                            <br />
                            <p>Integer lectus magna, consequat eu ornare vitae, volutpat quis nisi. Nunc id neque dolor. Aliquam nec feugiat tortor. Praesent at imperdiet tellus. Duis dictum ipsum non ipsum varius ornare. Praesent velit dolor, malesuada viverra sem vel, dapibus tempor massa. Ut ex lorem, fermentum quis sodales ac, aliquam sit amet sapien. Suspendisse ut ante fermentum, ultricies mauris a, bibendum lectus. Sed mollis dolor eget orci rutrum laoreet.</p>
                            <br />
                            <p>Etiam at mauris purus. Praesent laoreet rutrum malesuada. Aliquam consequat lacus quis tortor molestie interdum. Integer bibendum mauris eu ante scelerisque, non vehicula nulla volutpat. In turpis nibh, convallis vel tempus et, laoreet at neque. Morbi turpis turpis, ullamcorper eu porta vel, viverra eu magna. Nulla laoreet, erat in vehicula sollicitudin, diam sem facilisis magna, a euismod velit urna ut nisi. Donec laoreet metus eu risus bibendum laoreet. Nam arcu nisl, consectetur eu hendrerit at, venenatis eu tortor. Etiam ut sapien ex. Morbi ultrices eget tellus et vulputate. Quisque vestibulum nisl vel orci ultrices tristique. Curabitur risus tellus, iaculis vitae egestas ac, fermentum non velit.</p>
                        </TabContent>
                        <TabContent id={1}>
                            
                        <h2 className='m-b-8'>2. BÖLÜM LOREM IPSUM?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus lectus. Maecenas turpis magna, fringilla non nisi ut, posuere laoreet quam. Donec purus neque, imperdiet vitae varius quis, consequat eu nisl. Sed ultricies sollicitudin nibh, id posuere dui laoreet vitae. Donec congue massa vel justo mattis, eget sagittis erat maximus. Sed vehicula semper suscipit. Mauris lacinia scelerisque ligula sit amet feugiat. Cras pulvinar sit amet nisl non faucibus. Curabitur dui nisi, consequat sed mi a, lacinia vestibulum arcu.</p>
                            <br />
                            <p>Integer lectus magna, consequat eu ornare vitae, volutpat quis nisi. Nunc id neque dolor. Aliquam nec feugiat tortor. Praesent at imperdiet tellus. Duis dictum ipsum non ipsum varius ornare. Praesent velit dolor, malesuada viverra sem vel, dapibus tempor massa. Ut ex lorem, fermentum quis sodales ac, aliquam sit amet sapien. Suspendisse ut ante fermentum, ultricies mauris a, bibendum lectus. Sed mollis dolor eget orci rutrum laoreet.</p>
                            <br />
                            <p>Etiam at mauris purus. Praesent laoreet rutrum malesuada. Aliquam consequat lacus quis tortor molestie interdum. Integer bibendum mauris eu ante scelerisque, non vehicula nulla volutpat. In turpis nibh, convallis vel tempus et, laoreet at neque. Morbi turpis turpis, ullamcorper eu porta vel, viverra eu magna. Nulla laoreet, erat in vehicula sollicitudin, diam sem facilisis magna, a euismod velit urna ut nisi. Donec laoreet metus eu risus bibendum laoreet. Nam arcu nisl, consectetur eu hendrerit at, venenatis eu tortor. Etiam ut sapien ex. Morbi ultrices eget tellus et vulputate. Quisque vestibulum nisl vel orci ultrices tristique. Curabitur risus tellus, iaculis vitae egestas ac, fermentum non velit.</p>
                            
                            <h2 className='m-b-8 m-t-24'>LOREM IPSUM?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus lectus. Maecenas turpis magna, fringilla non nisi ut, posuere laoreet quam. Donec purus neque, imperdiet vitae varius quis, consequat eu nisl. Sed ultricies sollicitudin nibh, id posuere dui laoreet vitae. Donec congue massa vel justo mattis, eget sagittis erat maximus. Sed vehicula semper suscipit. Mauris lacinia scelerisque ligula sit amet feugiat. Cras pulvinar sit amet nisl non faucibus. Curabitur dui nisi, consequat sed mi a, lacinia vestibulum arcu.</p>
                            <br />
                            <p>Integer lectus magna, consequat eu ornare vitae, volutpat quis nisi. Nunc id neque dolor. Aliquam nec feugiat tortor. Praesent at imperdiet tellus. Duis dictum ipsum non ipsum varius ornare. Praesent velit dolor, malesuada viverra sem vel, dapibus tempor massa. Ut ex lorem, fermentum quis sodales ac, aliquam sit amet sapien. Suspendisse ut ante fermentum, ultricies mauris a, bibendum lectus. Sed mollis dolor eget orci rutrum laoreet.</p>
                            <br />
                            <p>Etiam at mauris purus. Praesent laoreet rutrum malesuada. Aliquam consequat lacus quis tortor molestie interdum. Integer bibendum mauris eu ante scelerisque, non vehicula nulla volutpat. In turpis nibh, convallis vel tempus et, laoreet at neque. Morbi turpis turpis, ullamcorper eu porta vel, viverra eu magna. Nulla laoreet, erat in vehicula sollicitudin, diam sem facilisis magna, a euismod velit urna ut nisi. Donec laoreet metus eu risus bibendum laoreet. Nam arcu nisl, consectetur eu hendrerit at, venenatis eu tortor. Etiam ut sapien ex. Morbi ultrices eget tellus et vulputate. Quisque vestibulum nisl vel orci ultrices tristique. Curabitur risus tellus, iaculis vitae egestas ac, fermentum non velit.</p>
                            <h2 className='m-b-8 m-t-24'>LOREM IPSUM?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus lectus. Maecenas turpis magna, fringilla non nisi ut, posuere laoreet quam. Donec purus neque, imperdiet vitae varius quis, consequat eu nisl. Sed ultricies sollicitudin nibh, id posuere dui laoreet vitae. Donec congue massa vel justo mattis, eget sagittis erat maximus. Sed vehicula semper suscipit. Mauris lacinia scelerisque ligula sit amet feugiat. Cras pulvinar sit amet nisl non faucibus. Curabitur dui nisi, consequat sed mi a, lacinia vestibulum arcu.</p>
                            <br />
                            <p>Integer lectus magna, consequat eu ornare vitae, volutpat quis nisi. Nunc id neque dolor. Aliquam nec feugiat tortor. Praesent at imperdiet tellus. Duis dictum ipsum non ipsum varius ornare. Praesent velit dolor, malesuada viverra sem vel, dapibus tempor massa. Ut ex lorem, fermentum quis sodales ac, aliquam sit amet sapien. Suspendisse ut ante fermentum, ultricies mauris a, bibendum lectus. Sed mollis dolor eget orci rutrum laoreet.</p>
                            <br />
                            <p>Etiam at mauris purus. Praesent laoreet rutrum malesuada. Aliquam consequat lacus quis tortor molestie interdum. Integer bibendum mauris eu ante scelerisque, non vehicula nulla volutpat. In turpis nibh, convallis vel tempus et, laoreet at neque. Morbi turpis turpis, ullamcorper eu porta vel, viverra eu magna. Nulla laoreet, erat in vehicula sollicitudin, diam sem facilisis magna, a euismod velit urna ut nisi. Donec laoreet metus eu risus bibendum laoreet. Nam arcu nisl, consectetur eu hendrerit at, venenatis eu tortor. Etiam ut sapien ex. Morbi ultrices eget tellus et vulputate. Quisque vestibulum nisl vel orci ultrices tristique. Curabitur risus tellus, iaculis vitae egestas ac, fermentum non velit.</p>
                        </TabContent>
                        <TabContent id={2}>
                            
                        <h2 className='m-b-8'>3. BÖLÜM LOREM IPSUM?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus lectus. Maecenas turpis magna, fringilla non nisi ut, posuere laoreet quam. Donec purus neque, imperdiet vitae varius quis, consequat eu nisl. Sed ultricies sollicitudin nibh, id posuere dui laoreet vitae. Donec congue massa vel justo mattis, eget sagittis erat maximus. Sed vehicula semper suscipit. Mauris lacinia scelerisque ligula sit amet feugiat. Cras pulvinar sit amet nisl non faucibus. Curabitur dui nisi, consequat sed mi a, lacinia vestibulum arcu.</p>
                            <br />
                            <p>Integer lectus magna, consequat eu ornare vitae, volutpat quis nisi. Nunc id neque dolor. Aliquam nec feugiat tortor. Praesent at imperdiet tellus. Duis dictum ipsum non ipsum varius ornare. Praesent velit dolor, malesuada viverra sem vel, dapibus tempor massa. Ut ex lorem, fermentum quis sodales ac, aliquam sit amet sapien. Suspendisse ut ante fermentum, ultricies mauris a, bibendum lectus. Sed mollis dolor eget orci rutrum laoreet.</p>
                            <br />
                            <p>Etiam at mauris purus. Praesent laoreet rutrum malesuada. Aliquam consequat lacus quis tortor molestie interdum. Integer bibendum mauris eu ante scelerisque, non vehicula nulla volutpat. In turpis nibh, convallis vel tempus et, laoreet at neque. Morbi turpis turpis, ullamcorper eu porta vel, viverra eu magna. Nulla laoreet, erat in vehicula sollicitudin, diam sem facilisis magna, a euismod velit urna ut nisi. Donec laoreet metus eu risus bibendum laoreet. Nam arcu nisl, consectetur eu hendrerit at, venenatis eu tortor. Etiam ut sapien ex. Morbi ultrices eget tellus et vulputate. Quisque vestibulum nisl vel orci ultrices tristique. Curabitur risus tellus, iaculis vitae egestas ac, fermentum non velit.</p>
                            
                            <h2 className='m-b-8 m-t-24'>LOREM IPSUM?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus lectus. Maecenas turpis magna, fringilla non nisi ut, posuere laoreet quam. Donec purus neque, imperdiet vitae varius quis, consequat eu nisl. Sed ultricies sollicitudin nibh, id posuere dui laoreet vitae. Donec congue massa vel justo mattis, eget sagittis erat maximus. Sed vehicula semper suscipit. Mauris lacinia scelerisque ligula sit amet feugiat. Cras pulvinar sit amet nisl non faucibus. Curabitur dui nisi, consequat sed mi a, lacinia vestibulum arcu.</p>
                            <br />
                            <p>Integer lectus magna, consequat eu ornare vitae, volutpat quis nisi. Nunc id neque dolor. Aliquam nec feugiat tortor. Praesent at imperdiet tellus. Duis dictum ipsum non ipsum varius ornare. Praesent velit dolor, malesuada viverra sem vel, dapibus tempor massa. Ut ex lorem, fermentum quis sodales ac, aliquam sit amet sapien. Suspendisse ut ante fermentum, ultricies mauris a, bibendum lectus. Sed mollis dolor eget orci rutrum laoreet.</p>
                            <br />
                            <p>Etiam at mauris purus. Praesent laoreet rutrum malesuada. Aliquam consequat lacus quis tortor molestie interdum. Integer bibendum mauris eu ante scelerisque, non vehicula nulla volutpat. In turpis nibh, convallis vel tempus et, laoreet at neque. Morbi turpis turpis, ullamcorper eu porta vel, viverra eu magna. Nulla laoreet, erat in vehicula sollicitudin, diam sem facilisis magna, a euismod velit urna ut nisi. Donec laoreet metus eu risus bibendum laoreet. Nam arcu nisl, consectetur eu hendrerit at, venenatis eu tortor. Etiam ut sapien ex. Morbi ultrices eget tellus et vulputate. Quisque vestibulum nisl vel orci ultrices tristique. Curabitur risus tellus, iaculis vitae egestas ac, fermentum non velit.</p>
                            <h2 className='m-b-8 m-t-24'>LOREM IPSUM?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus lectus. Maecenas turpis magna, fringilla non nisi ut, posuere laoreet quam. Donec purus neque, imperdiet vitae varius quis, consequat eu nisl. Sed ultricies sollicitudin nibh, id posuere dui laoreet vitae. Donec congue massa vel justo mattis, eget sagittis erat maximus. Sed vehicula semper suscipit. Mauris lacinia scelerisque ligula sit amet feugiat. Cras pulvinar sit amet nisl non faucibus. Curabitur dui nisi, consequat sed mi a, lacinia vestibulum arcu.</p>
                            <br />
                            <p>Integer lectus magna, consequat eu ornare vitae, volutpat quis nisi. Nunc id neque dolor. Aliquam nec feugiat tortor. Praesent at imperdiet tellus. Duis dictum ipsum non ipsum varius ornare. Praesent velit dolor, malesuada viverra sem vel, dapibus tempor massa. Ut ex lorem, fermentum quis sodales ac, aliquam sit amet sapien. Suspendisse ut ante fermentum, ultricies mauris a, bibendum lectus. Sed mollis dolor eget orci rutrum laoreet.</p>
                            <br />
                            <p>Etiam at mauris purus. Praesent laoreet rutrum malesuada. Aliquam consequat lacus quis tortor molestie interdum. Integer bibendum mauris eu ante scelerisque, non vehicula nulla volutpat. In turpis nibh, convallis vel tempus et, laoreet at neque. Morbi turpis turpis, ullamcorper eu porta vel, viverra eu magna. Nulla laoreet, erat in vehicula sollicitudin, diam sem facilisis magna, a euismod velit urna ut nisi. Donec laoreet metus eu risus bibendum laoreet. Nam arcu nisl, consectetur eu hendrerit at, venenatis eu tortor. Etiam ut sapien ex. Morbi ultrices eget tellus et vulputate. Quisque vestibulum nisl vel orci ultrices tristique. Curabitur risus tellus, iaculis vitae egestas ac, fermentum non velit.</p>
                        </TabContent>
                        <TabContent id={3}>
                            
                        <h2 className='m-b-8'>4. BÖLÜM LOREM IPSUM?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus lectus. Maecenas turpis magna, fringilla non nisi ut, posuere laoreet quam. Donec purus neque, imperdiet vitae varius quis, consequat eu nisl. Sed ultricies sollicitudin nibh, id posuere dui laoreet vitae. Donec congue massa vel justo mattis, eget sagittis erat maximus. Sed vehicula semper suscipit. Mauris lacinia scelerisque ligula sit amet feugiat. Cras pulvinar sit amet nisl non faucibus. Curabitur dui nisi, consequat sed mi a, lacinia vestibulum arcu.</p>
                            <br />
                            <p>Integer lectus magna, consequat eu ornare vitae, volutpat quis nisi. Nunc id neque dolor. Aliquam nec feugiat tortor. Praesent at imperdiet tellus. Duis dictum ipsum non ipsum varius ornare. Praesent velit dolor, malesuada viverra sem vel, dapibus tempor massa. Ut ex lorem, fermentum quis sodales ac, aliquam sit amet sapien. Suspendisse ut ante fermentum, ultricies mauris a, bibendum lectus. Sed mollis dolor eget orci rutrum laoreet.</p>
                            <br />
                            <p>Etiam at mauris purus. Praesent laoreet rutrum malesuada. Aliquam consequat lacus quis tortor molestie interdum. Integer bibendum mauris eu ante scelerisque, non vehicula nulla volutpat. In turpis nibh, convallis vel tempus et, laoreet at neque. Morbi turpis turpis, ullamcorper eu porta vel, viverra eu magna. Nulla laoreet, erat in vehicula sollicitudin, diam sem facilisis magna, a euismod velit urna ut nisi. Donec laoreet metus eu risus bibendum laoreet. Nam arcu nisl, consectetur eu hendrerit at, venenatis eu tortor. Etiam ut sapien ex. Morbi ultrices eget tellus et vulputate. Quisque vestibulum nisl vel orci ultrices tristique. Curabitur risus tellus, iaculis vitae egestas ac, fermentum non velit.</p>
                            
                            <h2 className='m-b-8 m-t-24'>LOREM IPSUM?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus lectus. Maecenas turpis magna, fringilla non nisi ut, posuere laoreet quam. Donec purus neque, imperdiet vitae varius quis, consequat eu nisl. Sed ultricies sollicitudin nibh, id posuere dui laoreet vitae. Donec congue massa vel justo mattis, eget sagittis erat maximus. Sed vehicula semper suscipit. Mauris lacinia scelerisque ligula sit amet feugiat. Cras pulvinar sit amet nisl non faucibus. Curabitur dui nisi, consequat sed mi a, lacinia vestibulum arcu.</p>
                            <br />
                            <p>Integer lectus magna, consequat eu ornare vitae, volutpat quis nisi. Nunc id neque dolor. Aliquam nec feugiat tortor. Praesent at imperdiet tellus. Duis dictum ipsum non ipsum varius ornare. Praesent velit dolor, malesuada viverra sem vel, dapibus tempor massa. Ut ex lorem, fermentum quis sodales ac, aliquam sit amet sapien. Suspendisse ut ante fermentum, ultricies mauris a, bibendum lectus. Sed mollis dolor eget orci rutrum laoreet.</p>
                            <br />
                            <p>Etiam at mauris purus. Praesent laoreet rutrum malesuada. Aliquam consequat lacus quis tortor molestie interdum. Integer bibendum mauris eu ante scelerisque, non vehicula nulla volutpat. In turpis nibh, convallis vel tempus et, laoreet at neque. Morbi turpis turpis, ullamcorper eu porta vel, viverra eu magna. Nulla laoreet, erat in vehicula sollicitudin, diam sem facilisis magna, a euismod velit urna ut nisi. Donec laoreet metus eu risus bibendum laoreet. Nam arcu nisl, consectetur eu hendrerit at, venenatis eu tortor. Etiam ut sapien ex. Morbi ultrices eget tellus et vulputate. Quisque vestibulum nisl vel orci ultrices tristique. Curabitur risus tellus, iaculis vitae egestas ac, fermentum non velit.</p>
                            <h2 className='m-b-8 m-t-24'>LOREM IPSUM?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus lectus. Maecenas turpis magna, fringilla non nisi ut, posuere laoreet quam. Donec purus neque, imperdiet vitae varius quis, consequat eu nisl. Sed ultricies sollicitudin nibh, id posuere dui laoreet vitae. Donec congue massa vel justo mattis, eget sagittis erat maximus. Sed vehicula semper suscipit. Mauris lacinia scelerisque ligula sit amet feugiat. Cras pulvinar sit amet nisl non faucibus. Curabitur dui nisi, consequat sed mi a, lacinia vestibulum arcu.</p>
                            <br />
                            <p>Integer lectus magna, consequat eu ornare vitae, volutpat quis nisi. Nunc id neque dolor. Aliquam nec feugiat tortor. Praesent at imperdiet tellus. Duis dictum ipsum non ipsum varius ornare. Praesent velit dolor, malesuada viverra sem vel, dapibus tempor massa. Ut ex lorem, fermentum quis sodales ac, aliquam sit amet sapien. Suspendisse ut ante fermentum, ultricies mauris a, bibendum lectus. Sed mollis dolor eget orci rutrum laoreet.</p>
                            <br />
                            <p>Etiam at mauris purus. Praesent laoreet rutrum malesuada. Aliquam consequat lacus quis tortor molestie interdum. Integer bibendum mauris eu ante scelerisque, non vehicula nulla volutpat. In turpis nibh, convallis vel tempus et, laoreet at neque. Morbi turpis turpis, ullamcorper eu porta vel, viverra eu magna. Nulla laoreet, erat in vehicula sollicitudin, diam sem facilisis magna, a euismod velit urna ut nisi. Donec laoreet metus eu risus bibendum laoreet. Nam arcu nisl, consectetur eu hendrerit at, venenatis eu tortor. Etiam ut sapien ex. Morbi ultrices eget tellus et vulputate. Quisque vestibulum nisl vel orci ultrices tristique. Curabitur risus tellus, iaculis vitae egestas ac, fermentum non velit.</p>
                        </TabContent>
                        <TabContent id={4}>
                            
                        <h2 className='m-b-8'>5. BÖLÜM LOREM IPSUM?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus lectus. Maecenas turpis magna, fringilla non nisi ut, posuere laoreet quam. Donec purus neque, imperdiet vitae varius quis, consequat eu nisl. Sed ultricies sollicitudin nibh, id posuere dui laoreet vitae. Donec congue massa vel justo mattis, eget sagittis erat maximus. Sed vehicula semper suscipit. Mauris lacinia scelerisque ligula sit amet feugiat. Cras pulvinar sit amet nisl non faucibus. Curabitur dui nisi, consequat sed mi a, lacinia vestibulum arcu.</p>
                            <br />
                            <p>Integer lectus magna, consequat eu ornare vitae, volutpat quis nisi. Nunc id neque dolor. Aliquam nec feugiat tortor. Praesent at imperdiet tellus. Duis dictum ipsum non ipsum varius ornare. Praesent velit dolor, malesuada viverra sem vel, dapibus tempor massa. Ut ex lorem, fermentum quis sodales ac, aliquam sit amet sapien. Suspendisse ut ante fermentum, ultricies mauris a, bibendum lectus. Sed mollis dolor eget orci rutrum laoreet.</p>
                            <br />
                            <p>Etiam at mauris purus. Praesent laoreet rutrum malesuada. Aliquam consequat lacus quis tortor molestie interdum. Integer bibendum mauris eu ante scelerisque, non vehicula nulla volutpat. In turpis nibh, convallis vel tempus et, laoreet at neque. Morbi turpis turpis, ullamcorper eu porta vel, viverra eu magna. Nulla laoreet, erat in vehicula sollicitudin, diam sem facilisis magna, a euismod velit urna ut nisi. Donec laoreet metus eu risus bibendum laoreet. Nam arcu nisl, consectetur eu hendrerit at, venenatis eu tortor. Etiam ut sapien ex. Morbi ultrices eget tellus et vulputate. Quisque vestibulum nisl vel orci ultrices tristique. Curabitur risus tellus, iaculis vitae egestas ac, fermentum non velit.</p>
                            
                            <h2 className='m-b-8 m-t-24'>LOREM IPSUM?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus lectus. Maecenas turpis magna, fringilla non nisi ut, posuere laoreet quam. Donec purus neque, imperdiet vitae varius quis, consequat eu nisl. Sed ultricies sollicitudin nibh, id posuere dui laoreet vitae. Donec congue massa vel justo mattis, eget sagittis erat maximus. Sed vehicula semper suscipit. Mauris lacinia scelerisque ligula sit amet feugiat. Cras pulvinar sit amet nisl non faucibus. Curabitur dui nisi, consequat sed mi a, lacinia vestibulum arcu.</p>
                            <br />
                            <p>Integer lectus magna, consequat eu ornare vitae, volutpat quis nisi. Nunc id neque dolor. Aliquam nec feugiat tortor. Praesent at imperdiet tellus. Duis dictum ipsum non ipsum varius ornare. Praesent velit dolor, malesuada viverra sem vel, dapibus tempor massa. Ut ex lorem, fermentum quis sodales ac, aliquam sit amet sapien. Suspendisse ut ante fermentum, ultricies mauris a, bibendum lectus. Sed mollis dolor eget orci rutrum laoreet.</p>
                            <br />
                            <p>Etiam at mauris purus. Praesent laoreet rutrum malesuada. Aliquam consequat lacus quis tortor molestie interdum. Integer bibendum mauris eu ante scelerisque, non vehicula nulla volutpat. In turpis nibh, convallis vel tempus et, laoreet at neque. Morbi turpis turpis, ullamcorper eu porta vel, viverra eu magna. Nulla laoreet, erat in vehicula sollicitudin, diam sem facilisis magna, a euismod velit urna ut nisi. Donec laoreet metus eu risus bibendum laoreet. Nam arcu nisl, consectetur eu hendrerit at, venenatis eu tortor. Etiam ut sapien ex. Morbi ultrices eget tellus et vulputate. Quisque vestibulum nisl vel orci ultrices tristique. Curabitur risus tellus, iaculis vitae egestas ac, fermentum non velit.</p>
                            <h2 className='m-b-8 m-t-24'>LOREM IPSUM?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus lectus. Maecenas turpis magna, fringilla non nisi ut, posuere laoreet quam. Donec purus neque, imperdiet vitae varius quis, consequat eu nisl. Sed ultricies sollicitudin nibh, id posuere dui laoreet vitae. Donec congue massa vel justo mattis, eget sagittis erat maximus. Sed vehicula semper suscipit. Mauris lacinia scelerisque ligula sit amet feugiat. Cras pulvinar sit amet nisl non faucibus. Curabitur dui nisi, consequat sed mi a, lacinia vestibulum arcu.</p>
                            <br />
                            <p>Integer lectus magna, consequat eu ornare vitae, volutpat quis nisi. Nunc id neque dolor. Aliquam nec feugiat tortor. Praesent at imperdiet tellus. Duis dictum ipsum non ipsum varius ornare. Praesent velit dolor, malesuada viverra sem vel, dapibus tempor massa. Ut ex lorem, fermentum quis sodales ac, aliquam sit amet sapien. Suspendisse ut ante fermentum, ultricies mauris a, bibendum lectus. Sed mollis dolor eget orci rutrum laoreet.</p>
                            <br />
                            <p>Etiam at mauris purus. Praesent laoreet rutrum malesuada. Aliquam consequat lacus quis tortor molestie interdum. Integer bibendum mauris eu ante scelerisque, non vehicula nulla volutpat. In turpis nibh, convallis vel tempus et, laoreet at neque. Morbi turpis turpis, ullamcorper eu porta vel, viverra eu magna. Nulla laoreet, erat in vehicula sollicitudin, diam sem facilisis magna, a euismod velit urna ut nisi. Donec laoreet metus eu risus bibendum laoreet. Nam arcu nisl, consectetur eu hendrerit at, venenatis eu tortor. Etiam ut sapien ex. Morbi ultrices eget tellus et vulputate. Quisque vestibulum nisl vel orci ultrices tristique. Curabitur risus tellus, iaculis vitae egestas ac, fermentum non velit.</p>
                        </TabContent>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}

export default page