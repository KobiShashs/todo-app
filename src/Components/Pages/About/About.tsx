import "./About.css";
import {useEffect} from "react";
import notify from "../../../Services/Notifications";

function About(): JSX.Element {

    useEffect(() => {
        notify.success("kokoriko");
    }, []);
    return (
        <div className="About">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id luctus arcu. Mauris at nunc finibus,
                condimentum lorem ut, volutpat lectus. Etiam ac viverra velit, vel condimentum lorem. Cras faucibus ut
                lectus non dignissim. Duis porttitor mauris nulla, non porttitor nibh suscipit ac. Maecenas rutrum,
                sapien at mollis aliquam, lacus dolor feugiat est, ut vehicula nunc augue vel libero. Suspendisse eu
                nunc eget eros lacinia vestibulum id vitae dui. Morbi venenatis ipsum purus.
            </p>

            <p>
                Nunc tempor dapibus auctor. Morbi varius sapien nec tellus ultrices cursus. Fusce libero felis, lacinia
                a luctus commodo, consectetur a metus. Mauris sollicitudin lobortis quam, et suscipit metus dapibus vel.
                Phasellus euismod sollicitudin fringilla. Aenean nec est odio. Suspendisse ultricies quam in nisi
                ullamcorper pretium. Vestibulum dignissim eleifend vestibulum. Etiam lacus elit, varius at nunc ut,
                elementum mattis elit.
            </p>


            <p>
                Maecenas eu sagittis nisl. Etiam ut augue dui. Sed scelerisque mollis diam ac eleifend. Donec placerat
                gravida est vitae scelerisque. Sed ac augue est. Maecenas pretium egestas lacus eget feugiat. Aliquam
                sapien mauris, auctor quis ante ut, mollis imperdiet lectus. Aenean sed dictum lacus, sit amet mattis
                ex. Maecenas ut eleifend tellus. Duis imperdiet nibh non auctor bibendum. Nulla lorem turpis, vulputate
                commodo pretium eu, viverra non massa. Morbi sit amet nulla eu lacus placerat dapibus nec sagittis quam.
                Etiam porttitor tempus enim vitae fringilla. Quisque malesuada tortor in metus volutpat ultrices. Ut
                augue metus, commodo sed erat sed, suscipit consectetur enim. Maecenas pretium metus leo, a vulputate
                est sodales eget.
            </p>
            <p>
                Vivamus ac porttitor lorem. Etiam vitae nisl tempus, imperdiet eros et, lobortis diam. Etiam nec sodales
                justo. Etiam egestas neque faucibus magna vulputate, in ullamcorper nibh bibendum. Etiam eu tincidunt
                neque, et fermentum urna. Aliquam mollis orci et tortor rutrum ornare. Nunc scelerisque, ipsum at
                bibendum fringilla, libero sem aliquam odio, non convallis nisi quam id dui. Morbi vitae velit eget ex
                rutrum ornare a at urna. Quisque vitae sapien sit amet justo consectetur tristique at in nisi. Fusce non
                semper quam. Integer ac nisi non nisl ultrices dictum. Nulla facilisis lobortis lorem, et lacinia sem
                pellentesque ut.
            </p>
            <p>
                Vivamus at metus vel turpis vulputate pharetra eget eu sapien. Curabitur at fringilla ante. Donec
                tincidunt leo id arcu commodo, eu laoreet turpis lacinia. Aenean et rutrum purus, et tincidunt ante.
                Quisque rutrum et tellus volutpat gravida. Vivamus velit erat, rutrum ac lacinia sit amet, gravida eget
                mauris. Morbi tincidunt, nulla id venenatis sagittis, turpis elit egestas ligula, vitae vulputate risus
                dolor at sem. Fusce ultrices mauris aliquet, malesuada dolor in, ullamcorper ipsum. Aenean vulputate
                ornare risus at laoreet. Sed euismod neque ac scelerisque dignissim. Mauris ullamcorper placerat libero
                quis pretium. Nullam ultrices neque sed dignissim mollis. Etiam tristique, nisi nec efficitur porttitor,
                quam lectus viverra dui, in vestibulum eros mauris ut nisi.

            </p>

        </div>
    );
}

export default About;
