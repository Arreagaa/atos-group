@component('mail::message')

<h1>Correo Grupo Atos</h1>
@component('mail::panel')
    Mensaje de {{$name}}
@endcomponent
<p>
    {{$body}}
</p>
<br>
<p>
    Medios de Contacto:
</p>
<ul>
    <li>Número Teléfono: {{$phone}}</li>
    <li>Correo Electrónico: {{$email}}</li>
</ul>
<hr>
<p>
    ¡Los grandes trabajos son hechos por la perseverancia!
</p>

@endcomponent